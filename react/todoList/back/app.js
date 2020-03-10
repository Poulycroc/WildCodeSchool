const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const apiRoutes = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoutes);

module.exports = app;
