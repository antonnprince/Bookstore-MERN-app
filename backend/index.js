import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json()); // to use JSON format data

// Enable CORS for all routes
app.use(cors());

// Set up route handler for root URL
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN');
});

// Use booksRoutes for '/books' routes
app.use('/books', booksRoutes);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
