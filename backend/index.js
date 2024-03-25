import express from "express"
import {PORT} from "./config.js";

const app = express();

//sets up the route handler for root URL
//when GET req made, callback function will be executed
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to MERN')
});

app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`)
})
