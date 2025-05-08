import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { Apiresponce } from "../utils/Apiresponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../Model/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {

    const token =
      req.cookies?.accesstoken ||
      req.header("Authorization")?.split("Bearer ")[1];

    if (!token) {
      throw new ApiError(401, "Unauthorized Request: No token provided");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded Token:", decodedToken); 
    
    const user = await User.findById(decodedToken?._id || decodedToken.id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token: User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});
