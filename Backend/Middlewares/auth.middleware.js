import mongoose from "mongoose";
import {ApiError} from "../utils/ApiError.js"
import {Apiresponce} from "../utils/Apiresponce.js "
import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../Model/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req , res , next)=>{
    try {
        console.log("Cookies:", req.cookies);
        console.log("Authorization Header:", req.header("Authorization"));
    
        const token = req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ", "");
    
        console.log("Extracted Token:", token);
    
        if (!token) {
          throw new ApiError(401, "Unauthorized Request - No token provided");
        }
    
        // Verify token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded Token:", decodedToken);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
          throw new ApiError(401, "Invalid Access Token - User not found");
        }
    
        req.user = user;
        next();
      } catch (error) {
        console.error("JWT Verification Error:", error);
        throw new ApiError(401, error?.message || "Invalid Access Token");
      }
})