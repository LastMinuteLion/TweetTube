//require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import connectDb from "./dataBase/database.js";


dotenv.config({
    path: './env'
})

connectDb()
.then(() => {
    app.on("error" , (error)=> {
        console.log("Err: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000 , ()=> {
        console.log((`server is running at port :${process.env.PORT}`));
    })
})
.catch((err)=> {
    console.log("MOngo db connection failed!!!!",err);
})