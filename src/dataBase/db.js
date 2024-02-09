import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb = async() => {
    try{//we can also store the await function in a variable
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`\n MongoDb connected ! ! DB HOST:
        ${connectionInstance.connection.host}`);
    }catch(err){
        console.log("MONGO DB connection FAILED",err);
        process.exit(1)
    }
}

export default connectDb;