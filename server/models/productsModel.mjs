import { pool } from "../config/db.mjs"

export const Product = {

    async findAll() {
        const result = await pool.query('SELECT * FROM products');
        return result;
    }
    
}

// export const findPath = async (id) => {
//     const result = await pool.query('SELECT imgurl FROM products WHERE id = $1', [id])

//     return result.rows[0]?.imgurl;
// }