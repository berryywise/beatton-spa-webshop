import { pool } from "../config/db.mjs";

export const Product = {
  async getAllProducts() {
    const result = await pool.query("SELECT * FROM products");
    return result;
  },

  async getProductbyId(id) {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return result;
  },

  async createProduct(name, description, imgurl, price, in_stock) {
    const result = await pool.query(
      "INSERT INTO products (name, description, imgurl, price, in_stock) VALUES ($1, $2, $3, $4, $5)",
      [name, description, imgurl, price, in_stock]
    );
    return result;
  },

  async updateProduct(name, description, imgurl, price, in_stock, id) {
    const result = await pool.query(
      "UPDATE products SET name = COALESCE($1, name), description = COALESCE($2, description), imgurl = COALESCE($3, imgurl), price = COALESCE($4, price), in_stock = COALESCE($5, in_stock) WHERE id = $6 RETURNING *",
      [name, description, imgurl, price, in_stock, id]
    );
    return result;
  },

  async deleteProduct(id) {
    const result = await pool.query("DELETE FROM products WHERE id = $1", [id]);
    return result;
  },
};
