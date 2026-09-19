import dotenv from 'dotenv'
import mongoose, { get } from "mongoose";
import {DB_NAME} from "./constants.js";
import connect_DB from "./db/index.js";

dotenv.config({
     path: './.env'
})

connect_DB()


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