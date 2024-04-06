const app = express();

app.use(express.json()); // to use JSON format data

// Enable CORS for all routes
app.use(cors());


// mongodbModule.js

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://antonprince95:<password>@bookstore.hnfdgr8.mongodb.net/?retryWrites=true&w=majority&appName=bookstore";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



app.get('/books', (request, response) => {
    await client.connect();
});
