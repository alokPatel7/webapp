const Joi = require("joi");
const usersValidtors = require("../validators/users.validtors");
const userServices = require("../services/user.service");

exports.getUserDetailByID = async (req, res, next) => {
  try {
    const userId = req.params;
    const isValid = Joi.object(usersValidtors.userById).validateAsync(userId);
    if (!userId || !isValid) {
      res.status(500).json({
        message: "Invalid user id!!!",
      });
    }
    const user = await userServices.getUserById(userId);

    if (user) {
      res.status(200).json({ ...user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({
      ...error,
    });
  }
};
