const express = require("express");
const app = express();
const routes = require("./routes");

require("./database/con");

app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
