const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index);

router.post("/new", productController.new);

router.get("/:id", productController.show);

router.put("/:id/edit", productController.edit);

module.exports = router;
