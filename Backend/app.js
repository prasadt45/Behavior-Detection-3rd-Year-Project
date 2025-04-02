import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import { upload } from './Middlewares/multer.middleware.js';
import mongoose from 'mongoose';
import userrouter from './Routes/user.routes.js';

// Get the absolute directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure 'public/temp' exists
const tempDir = path.join(__dirname, "public/temp");
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Set up middlewares
app.use(
    cors({
        origin: "http://localhost:5173", // Allow frontend URL
        credentials: true, // Enable cookies/auth headers
    })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files (e.g., uploaded images)
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userrouter);

// Predict Route
app.post("/api/v1/predict", upload.fields([{ name: "image", maxCount: 1 }]), async (req, res) => {
    try {
        if (!req.files || !req.files.image || req.files.image.length === 0) {
            return res.status(400).json({ error: "No image provided." });
        }

        // Resolve absolute paths
        const scriptPath = path.resolve(__dirname, "MLmodel/test.py"); // Python script
        const imagePath = path.resolve(__dirname, req.files.image[0].path); // Uploaded image
        console.log("🟢 Script Path:", scriptPath);
        console.log("🟢 Image Path:", imagePath);
        console.log(`🟢 Running command: python "${scriptPath}" "${imagePath}"`);
        // Execute Python script
        exec(
          `python "${scriptPath}" "${imagePath}"`, 
          { cwd: path.dirname(scriptPath) },  // Set working directory
          (error, stdout, stderr) => {
              if (error) {
                  console.error("❌ Error executing script:", error.message);
                  return res.status(500).json({ error: error.message });
              }
              if (stderr) {
                  console.error("❌ Python Error:", stderr);
                  return res.status(500).json({ error: stderr });
              }
      
              const output = stdout.trim().split("\n");
              if (output.length >= 2) {
                  return res.json({
                      classIndex: output[0],
                      activity: output[1]
                  });
              } else {
                  return res.status(500).json({ error: "Unexpected Python output", output: stdout });
              }
          }
      );
      

    } catch (err) {
        console.error("❌ Server Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Home Route
app.get('/', (req, res) => {
    res.send('Hello from server');
});

export { app };
