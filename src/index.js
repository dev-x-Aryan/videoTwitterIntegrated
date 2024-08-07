import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import dotenv from 'dotenv';
dotenv.config({path: './.env'});
import {app} from './app.js'

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error connecting to MongoDB", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Application is listening at Port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()