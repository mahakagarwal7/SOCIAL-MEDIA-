import User from "../models/user.model.js";
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

        const newUser = await User.create({username,name,password,email})

        res.status(201).json({newUser})
    }
    catch{
        res.status(500).json({message : "Internal Server Error"})

    }

}