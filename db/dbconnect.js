const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/urlShortener", {
      dbName: "Url_shortener",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((error) => {
      console.log(`Error connecting to database: ${error}`);
    });
};

module.exports = dbConnection;
