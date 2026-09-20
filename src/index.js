import dotenv from 'dotenv'
import mongoose, { get } from "mongoose";
import {DB_NAME} from "./constants.js";
import connect_DB from "./db/index.js";

dotenv.config({
     path: './.env'
})

connect_DB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed !!!",err);
})

/*import express from "express";
const app = express()

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listenting on port ${process.env.PORT}`)
        })


    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()*/