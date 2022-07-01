const express = require('express');
const nameController = require('../controller/nameController');
const router = express.Router();

router.route("/:name").get(nameController.getName);

module.exports = router;