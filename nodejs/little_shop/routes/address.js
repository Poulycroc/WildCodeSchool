const express = require("express");
const router = express.Router();

const addressController = require("../controllers/addressController");

router.post("/new", addressController.new);

module.exports = router;
