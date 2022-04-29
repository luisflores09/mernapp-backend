//////////////////////////
// Dependencies
//////////////////////////
//get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3001
// pull DATABASE_URL from .env
const { PORT, DATABASE_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
//import mongoose
const mongoose = require('mongoose');
// import people controller
const peopleController = require('./controllers/people');
// import middleware
const cors = require('cors');
const morgan = require('morgan');

//////////////////////////
// Database Connection
//////////////////////////
// Establish connection
mongoose.connect(DATABASE_URL);
// Connection Events
mongoose.connection
    .on('open', () => console.log(`You are connected to MongoDB`))
    .on('close', () => console.log(`You are disconnected from MongoDB`))
    .on('error', (error) => console.log(error));


//////////////////////////
// Middleware
//////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan('dev')); // console logging
app.use(express.json()); // parse json bodies

//////////////////////////
// Routes
//////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/people', peopleController);

//////////////////////////
// Listener
//////////////////////////
app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
