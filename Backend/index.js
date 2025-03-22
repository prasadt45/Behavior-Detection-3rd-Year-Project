import express from "express";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./DB/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    // Ensure the server only listens after DB connection is successful
    console.log('Connected to database');
})
.catch((err) => {
    console.error('Database connection failed', err);
    server.close(() => {
        process.exit(1); // Exit with failure code
    });
});


  const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  }
    );
