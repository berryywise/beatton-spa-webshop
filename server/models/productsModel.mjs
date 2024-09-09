import { pool } from "../config/db.mjs"

export const findAll = async () => {
    const result = await pool.query('SELECT * FROM products');
    return result
}