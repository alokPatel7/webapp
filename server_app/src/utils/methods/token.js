// const userSchema = require("../schemas/user-schema");
// const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.generateToken = async (params) => {
  try {
    const jwtSecretKey = process.env.JWT_SECRETKEY;
    const token = jwt.sign(params, jwtSecretKey, { expiresIn: 1 * 60 });
    const refreshToken = await this.generateRefreshToken(params);
    return { token, refreshToken };
  } catch (error) {
    return error;
  }
};

exports.generateRefreshToken = async (params) => {
  try {
    const jwtSecretKey = process.env.JWT_SECRETKEY;
    const data = {
      ...params,
      time: Date(),
    };
    return jwt.sign(data, jwtSecretKey, {
      expiresIn: process.env.JWT_EXPIRATION_MINUTES,
    });
  } catch (error) {
    return error;
  }
};
