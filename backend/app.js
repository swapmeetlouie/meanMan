// Dependencies 
const express = require("express");
const bodyParser = require("body-parser"); // Node.js body parsing middleware 
const mongoose = require("mongoose");

// Express Routes 
const postsRoutes = require("./routes/posts");

const app = express();

mongoose
// Local Mongo instance, will be replaced with MySQL and later DB2
  .connect("mongodb://localhost/navy", 
        {useNewUrlParser: true}) // Removes annoying DepreciationWarning
  .then(() => {
    console.log("MongoDB connection working.");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// bodyParser options 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Header options 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
// Full options declared but only GET used in current app
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// API for FY19 Table
app.use("/api/dash_fy19", postsRoutes);

module.exports = app;
