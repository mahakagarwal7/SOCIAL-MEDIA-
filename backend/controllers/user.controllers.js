import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import genToken from "../utils/genToken.js";
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

        
        //Generate JWT
        
        const token = genToken(newUser._id)
        console.log(token)

        res.status(201).json({newUser})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})

    }

}

export const loginUser =  async(req,res)=>{
    // login the user
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(422).json({message:'All fields are required'});
        }

        const userExists = await User.findOne({email})

        if(!userExists){
            return res.status(404).json({message: 'User not Found'})
        }

        const correctPassword = bcrypt.compareSync(password,userExists.password);

        if(!correctPassword){
            return res.status(401).json({message:'Invalid Password'});
        }

        res.status(200).json({message:'Login Successful',
            user : userExists
        })
    }catch(error){
        console.log(error)
        res.status(500).json({message : "Internal Server Error"})
    }
   
}

