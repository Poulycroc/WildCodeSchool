const express = require("express");
const router = express.Router();

const userController = require("../controllers/usersController");

router.get("/", userController.index);

router.post("/new", userController.new);

router.get("/:id", userController.show);

router.put("/:id/edit", userController.edit);

router.get("/:id/cart", userController.showByCart);

router.get("/:id/delete", userController.destroy);

module.exports = router;
