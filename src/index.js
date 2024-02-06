//require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import connectDb from "./dataBase/database.js";


dotenv.config({
    path: './env'
})

connectDb();