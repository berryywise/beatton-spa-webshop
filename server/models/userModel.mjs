import { pool } from "../config/db.mjs";

export const User = {
  async findAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result;
  },

  async findById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result;
  },

  async findByIdAndDelete(id) {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return result;
  },

  async findByUsername(username) {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return result;
  },

  async findByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    return result;
  },

  async findByIdAndUpdate(username, email, password, is_admin, id) {
    const result = await pool.query(
      "UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), password = COALESCE($3, password), is_admin = COALESCE($4, is_admin) WHERE id = $5",
      [username, email, password, is_admin, id]
    );
    return result;
  },

  async createUser(username, email, hashedPassword) {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );

    return result;
  },
};
