import 'dotenv/config'
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

pool.on("connect", () => {
    console.log('Connected to PSQL Database!')
})