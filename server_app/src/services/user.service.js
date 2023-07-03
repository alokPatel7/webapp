const pool = require("../database/database");

exports.getUserById = async ({ userid }) => {
  try {
    const parsedUserId = parseInt(userid, 10); // Convert userId to an integer

    const query =
      'SELECT id, "firstName", "lastName", "email", "isActive", "profileImage" FROM "user" WHERE id = $1';
    const client = await pool.connect();
    const user = await client.query(query, [parsedUserId]);

    // Check if the user data is empty
    if (!user.rows.length) {
      throw { message: "User  not fount with given id" }; // Throw an error indicating user not found
    }

    return user.rows[0]; // Return the user data
  } catch (error) {
    throw error;
  }
};
