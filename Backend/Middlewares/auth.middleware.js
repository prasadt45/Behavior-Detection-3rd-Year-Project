import mongoose from "mongoose";
import {ApiError} from "../utils/ApiError.js"
import {Apiresponce} from "../utils/Apiresponce.js "
import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../Model/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req , res , next)=>{
   try {
     const token =  req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer " , "") ;
  
     if(!token){
      throw new ApiError(401 , "UnAuthorized Request ")
     }
    // verify token
    const decodedToken =  jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    // _id is decleared in schema 
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    if(!user){
      throw  new ApiError(401 , "Invalid Access Token ")
    }
  
    req.user = user ; 
    next()
  } catch (error) {
     throw new ApiError(401 , error?.message || "Invalid Acccess Token ") ; 
  }
})