import pool from "../config/database";
import { Request, Response } from "express";

export default async function getAllCoffees(req: Request, res: Response) {
  const client = await pool.connect();
  const query = "SELECT * FROM productos";

  try {
    console.log("ejecutando quety");
    const result = await client.query(query);
    console.log("productos traidos:", result.rows);

    res.status(200).json({
      message: "productos traidos correctamente",
      productos: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  } finally {
    console.log("Ending database connection");
    client.release();
  }
}
