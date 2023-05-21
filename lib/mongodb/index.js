// This index file is used to connect to the MongoDB database. 
// It is used in the API routes to connect to the database and perform CRUD operations.

import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {}

// Check if the MONGODB_URI environment variable is set.
if(!URI){
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

// Variable client is a new instance of the MongoClient class. It is for connecting to the MongoDB database.
let client = new MongoClient(URI, options);
let clientPromise;

// Check if the NODE_ENV environment variable is set to production.
if(process.env.NODE_ENV === 'production'){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect();
    }
    // Set clientPromise to the global _mongoClientPromise variable if it is set.
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect(); // Set clientPromise to the client.connect() function if the NODE_ENV environment variable is not set to production.
}

export default clientPromise;