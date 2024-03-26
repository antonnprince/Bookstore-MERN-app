import express from "express"
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'

const app = express();

//sets up the route handler for root URL
//when GET req made, callback function will be executed
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN')
});

mongoose.connect(mongoDBURL).then(()=>{
console.log("Database connected");
app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`)
})

 }).catch((error)=>{
console.log(error)
});