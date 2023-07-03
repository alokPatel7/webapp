const Joi = require("joi");

module.exports = {
  userById: {
    userid: Joi.string().required(),
  },
};
