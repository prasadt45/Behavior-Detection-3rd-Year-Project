import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userschema = new mongoose.Schema({
   name:{
         type: String,
         required: true
   } , 
   email:{
            type: String,
            required: true  , 
            unique : true
   } , 
    password:{
                type: String,
                required: true , 
                minlength : [6, 'password must be at least 6 characters long']
    } ,
    words: { 
        type: [String], default: [] 
    }, 
    imagePath: {
        type: String 
    }, 
    refreshtoken:{
        type:String
    }

} , 
{
    timestamps : true
}) ; 

userschema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();

})

userschema.methods.comparepassword =  async function(password){
    return await bcrypt.compare(password , this.password);
} 

userschema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
        _id:this._id ,
        
        } , 
        process.env.ACCESS_TOKEN_SECRET , 
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
)
}
userschema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
        _id:this._id ,
        
        } , 
        process.env.REFRESH_TOKEN_SECRET , 
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
)
}

export const User = mongoose.model('User' , userschema) ;