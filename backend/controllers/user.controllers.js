import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
export const registerUser =  async(req,res)=>{
    // 
    const {username,name,email, password } = req.body

    //validations

    try{
           if(!username || !name || !password || !email){
            return res.status(422).json({message : "All fields are Required"})
           }

           // if username exists

        const userNameExists = await User.findOne({username})

        if(userNameExists){
            return res.status(400).json({message : 'username already exists'})
        }

        const emailExists = await User.findOne({email})

        if(emailExists){
            return res.status(400).json({message : 'email already exists'})
        }

        if(password.length<6){
            return res.status(400).json({message : 'Password length should be greater than or equal to 6'})
        }
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashedPassword = await bcrypt.hash(password , salt)


        const newUser = await User.create({username,name,password:hashedPassword,email})

        res.status(201).json({newUser})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})

    }

}