import mongoose from "mongoose";
import { User } from "../Model/user.model.js";
import { ApiError } from "../utils/ApiError.js"
import { Apiresponce } from "../utils/Apiresponce.js "
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const generatetoken = async (userid) => {
    try {
        const user = await User.findById(userid)
        if (!user) {
            throw new ApiError("User not found", 404)
        }

        const accesstoken = user.generateAccessToken();
        const refreshtoken = user.generateRefreshToken();
        user.refreshtoken = refreshtoken;
        await user.save({ validateBeforeSave: false })
        return { accesstoken, refreshtoken }
    } catch (error) {
        throw new ApiError(500, "Internal Server Error while generating token");
    }



}


const registeruser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new ApiError("Please fill all the fields", 400)
    }

    const exixstedUser = await User.findOne({ email });
    if (exixstedUser) {
        throw new ApiError("Email already exists", 400)
    }
    const newuser = await User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findById(newuser?._id).select("-password");
    if (!createdUser) {
        throw new ApiError("User not found", 404)

    }

    return res.status(200)
        .json(
            new Apiresponce(
                200,
                createdUser,
                "User created successfully"
            )
        )



})

const loginuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError("Please fill all the fields", 400)
    }
    const userexists = await User.findOne({ email })
    if (!userexists) {
        throw new ApiError("User not found", 404)
    }
    const verifieduser = await userexists.comparepassword(password)
    if (!verifieduser) {
        throw new ApiError("Invalid password", 400)
    }

    const { accesstoken, refreshtoken } = await generatetoken(userexists._id);

    const loginuser = await User.findById(userexists._id).select("-password");
    if (!loginuser) {
        throw new ApiError("User not found", 404)
    }

    const options = {
        httpOnly: true,// cokkies will be accesible only by server
        secure: false,
        sameSite:"None"

    }

    return res.status(200)
        .cookie("accesstoken", accesstoken, options)
        .cookie("refreshtoken", refreshtoken, options)
        .json(
            new Apiresponce(
                200,
                loginuser,
                "User Logged In SuccessFully"
            )
        )






})
const logoutuser = asyncHandler(async (req, res) => {
    // Remove refreshToken from the database
    await User.findByIdAndUpdate(req.user._id, { $unset: { refreshToken: 1 } }, { new: true });

    const options = {
        httpOnly: true, // Cookie is only accessible by the server
        secure: false ,   // Use secure cookies in production (HTTPS required)
        sameSite: "None"
    };

    return res.status(200)
        .clearCookie("accesstoken", options) // Clear access token
        .clearCookie("refreshtoken", options) // Clear refresh token
        .json(new Apiresponce(200, {}, "User Logged Out"));
});




const getuserprofile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password")
    return res.status(200)
        .json
        (
            new Apiresponce
                (
                    200,
                    user,
                    "User Profile"
                )
        )
})

// ✅ Upload Image
const uploadimage = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const imagePath = req.files?.image?.[0]?.path;
    console.log(imagePath)
    if (!imagePath) {
        throw new ApiError(400, "No image provided");
    }
    const uploadoncld = await uploadOnCloudinary(imagePath);
    if (!uploadoncld) {
        throw new ApiError(500, "Failed to upload image");
    }
    user.image = uploadoncld.secure_url;
    await user.save();
    console.log(req.files)

    return res.status(200)
        .json(
            new Apiresponce(
                200,
                uploadoncld,
                "Image uploaded successfully"
            )
        )
});






export { registeruser, loginuser, logoutuser, getuserprofile, uploadimage }; 