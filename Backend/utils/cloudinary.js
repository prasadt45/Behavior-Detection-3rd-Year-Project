import fs from "fs";
import path from "path";
import { ApiError } from "./ApiError.js";

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("❌ No local file path provided.");
            return null;
        }

        // Define destination folder
        const staticFolderPath = path.join("public", "static");
        if (!fs.existsSync(staticFolderPath)) {
            fs.mkdirSync(staticFolderPath, { recursive: true });
        }

        // Get filename and destination path
        const filename = path.basename(localFilePath);
        const destinationPath = path.join(staticFolderPath, filename);

        // Move file to static folder
        fs.renameSync(localFilePath, destinationPath);

        console.log("✅ File uploaded successfully to:", destinationPath);

        // Return the local file URL
        return { secure_url: `/static/${filename}` };
    } catch (error) {
        console.error("❌ Error uploading to local storage:", error);

        // Remove file if upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
};

export { uploadOnCloudinary };
