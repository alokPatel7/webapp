const express = require("express");
const router = express.Router();

const userController = require("../controllers/student.controller");

router.route("/student/:userid").get(userController.getUserDetailByID);

module.exports = router;
