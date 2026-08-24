import express from 'express';

import { registerUser } from '../controllers/user.controllers.js';

const userRoutes = express.Router()

//Register User

userRoutes.post('/register',registerUser)


//Login User

export default userRoutes