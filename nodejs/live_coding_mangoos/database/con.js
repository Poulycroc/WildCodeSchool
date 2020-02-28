/**
 * Database connection
 */
const mongoose = require("mongoose");

// using Mongoose for connecting on database
mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// execute the connection
const db = mongoose.connection;

// event listener
db.on("error", err => {
  if (err) console.log("fail connection");
});
db.once("open", () => {
  console.log("we're connected!");
});

module.exports = db;
