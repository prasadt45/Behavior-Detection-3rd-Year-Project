import mongoose from "mongoose";
import { registeruser , loginuser } from "../Controllers/user.controller.js";
import { Router } from "express";

const router = Router() ; 

router.route("/register").post(registeruser) ;
router.route("/login").post(loginuser) ;

export default router ; 