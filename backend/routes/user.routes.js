import express from 'express';

import { loginUser, registerUser } from '../controllers/user.controllers.js';

const userRoutes = express.Router()

//Register User

userRoutes.post('/register',registerUser)
userRoutes.post('/login',loginUser)


//Login User

export default userRoutes