// file already uploadded in server now take local path from server and upoload to cloudinary
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"
import { ApiError } from "./ApiError.js";

dotenv.config() ;



cloudinary.config({ 
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
   api_key: process.env.CLOUDINARY_API_KEY, 
   api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("❌ No local file path provided.");
            return null;
        }

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("✅ File uploaded successfully:", response.secure_url);
        

        // ✅ Delete file from local storage after upload
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;
    } catch (error) {
        console.error("❌ Error uploading to Cloudinary:", error);

        // ✅ Remove file if upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return null;
    }
};
const deletefromcloudinary = async (oldfilepath) => {
   try {
       if (!oldfilepath) {
           throw new ApiError(400, 'oldfilepath is required');
       }

       console.log("Attempting to delete file from Cloudinary with public_id:", oldfilepath);

       // Attempt to destroy the file using Cloudinary's uploader.destroy
       const result = await cloudinary.uploader.destroy(oldfilepath);

       // Log the full Cloudinary response for debugging
       console.log("Cloudinary Response:", result);

      
       console.log("File has been successfully removed from Cloudinary.");
       return result;

   } catch (error) {
       // Log the detailed error
       console.log("Error Removing File From Cloudinary:", error.message);
       throw new ApiError(500, `Error Removing File From Cloudinary: ${error.message}`);
   }
};




export {uploadOnCloudinary , deletefromcloudinary}




