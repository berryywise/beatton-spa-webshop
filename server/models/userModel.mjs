import { pool } from "../config/db.mjs";

export const User = {

    async findById(id) {
        const result = pool.query("SELECT * FROM users WHERE id = $1", [id])
        return result;
    },

    async findByIdAndDelete(id) {
        const result = pool.query("DELETE FROM users WHERE id = $1", [id])
        return result;
    }

}