import mongoose from "mongoose";

const connectdb = async()=>{
    return mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("DB connected Succesfully...");
            
        })
        .catch((err)=>{
            console.log("[DB ERR]\n",err.message);
            throw err;
        })
}

export default connectdb