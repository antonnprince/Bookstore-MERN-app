import express from "express"
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";

const app = express();

//sets up the route handler for root URL
//when GET req made, callback function will be executed
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN')
});

app.post('/books', async (request, response)=>{
    try{
            
        if(  !request.body.title || !request.body.author || request.body.publishYear)
            {
                return response.status(400).send({
                    message:'All fields are required',
                })
            }
            const newBook = {
                title: request.body.title,
                author: request.body.author,
                publishYear: request.body.publishYear
            };

            const book = await Book.create(newBook);

            return response.status(201).send(book);
    }
        catch(error){
            console.log(error.message);
            resposne.status(500).send({message: error.message});
        }
});

mongoose.connect(mongoDBURL).then(()=>{
console.log("Database connected");
app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`)
})

 }).catch((error)=>{
console.log(error)
});