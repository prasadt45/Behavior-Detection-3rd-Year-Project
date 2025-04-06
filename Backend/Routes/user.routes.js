import mongoose from "mongoose";
import { registeruser , loginuser , logoutuser , getuserprofile , uploadimage , generateword } from "../Controllers/user.controller.js";
import { Router } from "express";
import { verifyJWT } from "../Middlewares/auth.middleware.js";
import { upload } from "../Middlewares/multer.middleware.js";

const router = Router() ; 

router.route("/register").post(registeruser) ;
router.route("/login").post(loginuser) ;
router.route("/logout").post(verifyJWT , logoutuser) ;
router.route("/profile").get(verifyJWT , getuserprofile) ;
router.route("/uploadimage").post(
    upload.fields([{ name: "image", maxCount: 1 }]),
    
    uploadimage
);
router.route("/generateword").post( generateword) ;


export default router ; 