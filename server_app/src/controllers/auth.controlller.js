const Joi = require("joi");
const validators = require("./../validators/auth");
const { SignUp, Login } = require("../services/auth.service");
const { isEmailAlreadyUsed } = require("../utils/methods/user.methods");

exports.SignUp = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const isValidParams = Joi.object(validators.signup).validateAsync(params);
    if (isValidParams) {
      await isEmailAlreadyUsed(params.email);
      const result = await SignUp(params);
      res.status(200).send({
        result: result,
      });
    } else {
      res.status(400).send("Invalid payload");
    }
  } catch (error) {
    res.status(409).send(error.message.message);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const isValidParams = Joi.object(validators.login).validateAsync(params);
    if (isValidParams) {
      const result = await Login(params);
      res.status(200).send({
        data: result,
      });
    } else {
      res.status(400).send("Invalid payload");
    }
  } catch (error) {
    res.status(401).send("Authentication failed");
  }
};
