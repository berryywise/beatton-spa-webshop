import { pool } from "../config/db.mjs";

export const User = {
  async findById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result;
  },

  async findByIdAndDelete(id) {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return result;
  },

  async findByIdAndUpdate(username, email, password, is_admin, id) {
    
    const result = await pool.query(
      "UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), password = COALESCE($3, password), is_admin = COALESCE($4, is_admin) WHERE id = $5",
      [username, email, password, is_admin, id]
    );
    return result;
  }
};