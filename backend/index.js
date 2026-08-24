import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.routes.js";

dotenv.config()

const port = 8081

mongoose.connect(process.env.dbURL).then(() =>{
    console.log("DB Connected");
}).catch((err) =>{
    console.log(err);
})

const app = express();

app.use(express.json());

app.use('/users',userRoutes)




app.listen(port,() => {
    console.log(`Server Started at ${port}`);
})