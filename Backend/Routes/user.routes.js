import mongoose from "mongoose";
import { registeruser , loginuser , logoutuser , getuserprofile } from "../Controllers/user.controller.js";
import { Router } from "express";
import { verifyJWT } from "../Middlewares/auth.middleware.js";

const router = Router() ; 

router.route("/register").post(registeruser) ;
router.route("/login").post(loginuser) ;
router.route("/logout").post(verifyJWT , logoutuser) ;
router.route("/profile").get(verifyJWT , getuserprofile) ;


export default router ; 