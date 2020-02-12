const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.index);

router.post("/new", cartController.new);

router.get("/:id/delete", cartController.destroy);

module.exports = router;
