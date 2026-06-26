import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectdb from "./db.js"

const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"server is running healthy",
        success:"true",
        data:[]
    })
})


connectdb()
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`server running on port : ${process.env.PORT} `);
            
        })
    })
    .catch((err)=>{
        console.log("app is stopped due to ERR \n",err.message);
        process.exit(1);
    });



