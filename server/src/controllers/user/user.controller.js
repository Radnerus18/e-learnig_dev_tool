const User = require('../../models/userModel');
const errFunc = require('../../utilities/errorFunction');
const securePassword = require('../../utilities/securePassword');
const bcrypt = require("bcryptjs");
const secretToken = require('../../utilities/secretToken')
const addUser = async(req,res,next)=>{
    try{
        const {username,email,password} = req.body
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            return res.status(403).json(errFunc(true,"User Already Exists. Try Loggin in."));
        }
        const hashedPassword = await securePassword(password)
            const newUser = await User.create({
                username: username,
                email:email,
                password: hashedPassword
            })
            if(newUser){
                const token = secretToken(newUser._id)
                res.cookie("token",token,{
                    withCredentials: true,
                    httpOnly: false,
                })
                res.status(200).json(errFunc(false,"user created successfully",newUser))
                next();
            }else{
                res.status(400).json(errFunc(true,"Error in Creating User"))
            }
    }catch(err){
        res.status(403).json(errFunc(true,`Error in Adding User: ${err}`))
    }
}

const loginUser = async(req,res,next)=>{
    try{
        const {username,email,password} = req.body
        if( !email || !password){
            res.json(errFunc(true,"All fields required"))
        }
        const existingUser = await User.findOne({email:email})
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if(existingUser){
            if(passwordMatch){
                res.cookie("token",token,{
                    withCredentials: true,
                    httpOnly: false,
                })
                res.json(errFunc(false,"User Logged in",existingUser))
                next()
            }else{
                return res.json(errFunc(true,"Wrong Password"))
            }
        }else{
            return res.json(errFunc(true,"User does not exists. Please Registed first."))
        }
    }catch(err){
        return res.json(errFunc(true,`Error in loggin in ${err.message}`))
    }
}

module.exports =  {addUser,loginUser}