import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: parseInt(process.env.PORTDB || "5432", 10),
  database: process.env.DATABASE,
});

export default pool;
