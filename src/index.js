// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/database.js";
import {app} from './app.js'

dotenv.config({ path: './env' })

const port = process.env.PORT || 8000

connectDB()

.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ", error);
        throw(error)
        
    })
    app.listen(port || 8000, ()=>{
        console.log(`Server is runnig at Port: ${port}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!", err);
    
})






/*
import express from 'express'
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR: ", error);
            throw error
            
        })

        app.listen(process.env.PORT, ()=>{
            console.log("Server is running on port: ", process.env.PORT);
        })
    } catch (error) {
        console.log("ERROR: ", error);
        throw err
    }
})()

*/