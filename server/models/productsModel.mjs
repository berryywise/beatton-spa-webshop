import { pool } from "../config/db.mjs"

export const Product = {

    async getAllProducts() {
        const result = await pool.query('SELECT * FROM products');
        return result;
    },

    async getProductbyId(id) {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id])
        return result;
    },

    async createProduct(name, description, imgurl, price, in_stock) {
        const result = await pool.query('INSERT INTO products (name, description, imgurl, price, in_stock) VALUES ($1, $2, $3, $4, $5)', [name, description, imgurl, price, in_stock])
        return result;
    }


    
}