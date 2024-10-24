import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool(
  {connectionString: process.env.DATABASE_URL}
);

pool.on("connect", () => {
  console.log("Connected to PSQL Database!");
});
