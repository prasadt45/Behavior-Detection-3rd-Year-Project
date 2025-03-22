import express from 'express' ; 
import cookieParser from 'cookie-parser' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import mongoose from 'mongoose' ;


const app =  express() ;


app.use(cors()) ;
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()) ;

app.get('/' , (req , res) => {
    res.send('Hello from server')
}); 

export {app} 