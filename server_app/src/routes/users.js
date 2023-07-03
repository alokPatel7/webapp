const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.route("/user/:userid").get(userController.getUserDetailByID);

module.exports = router;
