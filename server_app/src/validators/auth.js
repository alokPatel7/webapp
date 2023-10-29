const Joi = require("joi");

module.exports = {
  // POST /v1/auth/register
  signup: {
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(128).required(),
  },

  // POST /v1/auth/login/email
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().required().max(128),
  },

  //POST /v1/auth/login/phone
  loginWithOtp: {
    sendOtp: {
      phoneNumber: Joi.string().min(3).max(13).required(),
      actionType: Joi.string().equal("create"),
    },
    confirmOtp: {
      phoneNumber: Joi.string().min(3).max(13).required(),
      actionType: Joi.string().equal("confirm"),
      verificationCode: Joi.string().length(6).required(),
    },
  },

  // POST /v1/auth/facebook
  // POST /v1/auth/google
  oAuth: {
    access_token: Joi.string().required(),
  },

  // POST /v1/auth/refresh
  refresh: {
    email: Joi.string().email(),
    refreshToken: Joi.string().required(),
  },
};
