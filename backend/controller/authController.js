import genToken from "../config/token.js"
import User from  "../models/userModel.js"
import bcrypt, { hash } from "bcrypt"


//1.signUp Funcitionality
export const signUp = async (req,res)=>{
    try {       
        let {name,email,password} = req.body
        let userExits = await User.findOne({email})

        if(userExits){
            return res.status(404).json({message:"User Already Exists"})
        }

        //Hash Password
        let hashPassword =  await bcrypt.hash(password,10)
        let user = await User.create({name,email,password:hashPassword})

        //Generate Token
        let token =await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,//changes
            sameSite:"",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
 
    } catch (error) {
        return res.status(500).json({message:`signUp error ${error}`})
    }
}


//2.Login Funcitionality
export const  login = async (req,res)=>{
    try {
        let {email,password} = req.body;
        let user = await User.findOne({email}).populate("listing","title image1 image2 image3 description rent category city landMark")
        if(!user){
            return res.status(404).json({message:"User is not Exits"})
        }
        //Bcrypt is Use for Comparing Password
         let isMatch = await bcrypt.compare(password,user.password)
         if(!isMatch){
            return res.status(404).json({message:"inCorrect Password"})
        }

        //Generate Token
        let token =await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,//changes
            sameSite:"",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message:`Login error ${error}`})

    }
    
}


//3.logout Functionality
export const logout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout SuccessFul"})
    } catch (error) {
        return res.status(500).json({message:`Logout error ${error}`})
    }
}







