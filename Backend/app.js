import express from 'express' ; 
import cookieParser from 'cookie-parser' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import mongoose from 'mongoose' ;
import userrouter from './Routes/user.routes.js'

const app =  express() ;
dotenv.config() ;


app.use(cors()) ;
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()) ;

// Routes declaration
app.use("/api/v1/users",userrouter);

app.get('/' , (req , res) => {
    res.send('Hello from server')
}); 

export {app} 
