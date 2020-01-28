const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).send('Cannot find trip with this id');
});

router.get("/trips/search", (req, res) => {
  console.log({ query: req.query })
});

app.use("/api/", router);

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});
