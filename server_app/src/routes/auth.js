const express = require("express");
const router = express.Router();

const authControllers = require("./../controllers/auth.controlller");

router.route("/signup").post(authControllers.SignUp);

router.route("/login").post(authControllers.Login);

module.exports = router;
