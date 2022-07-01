const express = require("express");
const numController = require("../controller/numController");
const router = express.Router();

router.route("/:num").get(numController.getNum);

module.exports = router;
