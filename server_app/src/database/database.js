const { Pool } = require("pg");

const pool = new Pool({
  user: "alokpatel",
  database: "assignment",
  host: "localhost",
  password: "@Fundango#79",
  port: "5432",
});

// connect to the PostgreSQL server
pool.connect(() => console.log("@ DB connected"));

// define the SQL command to create the table
const createTableQueryForSignUp = `
  CREATE TABLE IF NOT EXISTS "user" (
  id SERIAL PRIMARY KEY,
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255),
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "isActive" BOOLEAN,
  "profileImage" TEXT
);
`;

// execute the SQL command
pool.query(createTableQueryForSignUp, (err, res) => {
  if (err) {
    console.log("SignUpTable created err", err);
    throw err;
  }
  console.log("SignUpTable created successfully"); // close the client connection
  // pool.end();
});

// Close the pool when the application terminates
// pool.end(() => console.log("@ DB disconnected"));

module.exports = pool;
