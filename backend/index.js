import express, { request, response } from "express"
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();

app.use(express.json()) //to use json format data

//sets up the route handler for root URL
//when GET req made, callback function will be executed

 app.use(cors())

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN')
});


app.use('/books',booksRoutes)

mongoose.connect(mongoDBURL).then(()=>{
console.log("Database connected");
app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`)
})

 }).catch((error)=>{
console.log(error)
});