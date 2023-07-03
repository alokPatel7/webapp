const bcrypt = require("bcryptjs");
const pool = require("../database/database");
const {
  generateToken,
  generateRefreshToken,
} = require("../utils/methods/token");

exports.SignUp = async (params) => {
  try {
    const hashedPassword = await bcrypt.hash(params.password, 10);
    const firstName = params.email.split("@")[0];
    const query = `INSERT INTO "user" ("firstName", "lastName", "email", "password", "isActive", "profileImage") VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [firstName, null, params.email, hashedPassword, true, ""];

    const client = await pool.connect();
    const result = await client.query(query, values);

    const tokenPayload = {
      id: result.insertId,
      firstName,
      lastName: null,
      email: params.email,
    };

    const token = await generateToken(tokenPayload);

    return {
      ...token,
      user: {
        id: result.insertId,
        firstName,
        lastName: null,
        email: params.email,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.Login = async (params) => {
  try {
    const { email, password } = params;
    const query = `SELECT * FROM "user" WHERE email = $1`;
    const values = [email];

    const client = await pool.connect();
    const result = await client.query(query, values);

    if (result.rows.length === 0) {
      throw new Error("User not found");
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const tokenPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    const token = await generateToken(tokenPayload);

    return {
      ...token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
