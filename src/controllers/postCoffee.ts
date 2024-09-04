import pool from "../config/database";
import { Request, Response } from "express";

export default async function postCoffee(req: Request, res: Response) {
  const client = await pool.connect();
  console.log("Starting database operation");
  const query = `
      INSERT INTO productos (nombre, precio) VALUES ('machiatto', 4)
      RETURNING nombre
    `;

  try {
    console.log("Executing query");
    const result = await client.query(query);
    console.log(result);
    console.log("Nombre del café insertado:", result.rows[0].nombre);
    res.status(200).json({
      message: "Producto insertado correctamente",
      nombre: result.rows[0].nombre,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error inserting product", error);
      res.status(500).json({
        message: "Error inserting product",
        error: error.message,
      });
    }
  } finally {
    client.release();
  }
}
