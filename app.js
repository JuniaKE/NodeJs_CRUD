const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const MongoClient = require('mongodb').MongoClient
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
// Import Routes
const postsRoute = require('./routes/posts');
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.use('/api/posts', postsRoute);
app.use('/api/', homeRoute);
app.use('/api/users', usersRoute); // Calls the /routes/users.js module

/// Connect to MongoDB
const database = process.env.DB_HOST + process.env.DB_NAME;

(async() => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`MongoDB Connected: ${database}`);
    } catch (err) {
        console.error(err);
    }
})();
const port = 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});