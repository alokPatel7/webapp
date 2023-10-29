const Joi = require("joi");
const validators = require("./../validators/auth");
const { SignUp, Login } = require("../services/auth.service");
const { isEmailAlreadyUsed } = require("../utils/methods/user.methods");

exports.SignUp = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const isValidParams = Joi.object(validators.signup).validateAsync(params);
    if (isValidParams) {
      const isAlreadyAdded = await isEmailAlreadyUsed(params.email);
      if (isAlreadyAdded) {
        const result = await SignUp(params);
        res.status(200).send({
          ...result,
        });
      } else { 
        res.status(409).send({ message: params.email + " is already used." });
      }
    } else {
      res.status(400).send("Invalid payload");
    }
  } catch (error) {
    res.status(500).send(error.message.message);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const isValidParams = Joi.object(validators.login).validateAsync(params);
    if (isValidParams) {
      const result = await Login(params);
      res.status(200).send({
        ...result,
      });
    } else {
      res.status(400).send("Invalid payload");
    }
  } catch (error) {
    res.status(401).send("Authentication failed");
  }
};
