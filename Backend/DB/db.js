import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env before using process.env

const DB_NAME = "Behdetsys"
const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(process.env.MONGODB_URI, {
            writeConcern: { w: "majority" }
          });
          
      console.log(`Connected to database ${connInstance.connection.host}`);
    } catch (error) {
      console.error("Database connection failed", error); // Fix: Use `error` instead of `err`
      process.exit(1); 
    }
  };
  


export default connectDB;
