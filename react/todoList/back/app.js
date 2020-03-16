const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require('cors')

const app = express();
const apiRoutes = require("./routes/api");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/api", apiRoutes);

module.exports = app;
