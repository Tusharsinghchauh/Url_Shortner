const express = require("express");
const app = express();
const urlRoutes = require("./routes/urlRoutes");
const dbConnection = require("./db/dbconnect"); //

app.use(express.json());

app.use("/", urlRoutes);

dbConnection();

module.exports = app;
