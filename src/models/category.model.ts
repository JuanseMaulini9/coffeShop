import pool from "../config/database";

export async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categorias");

  return rows;
}

export async function getCategory(id: number) {
  const { rows } = await pool.query("SELECT * FROM categorias WHERE id = $1", [
    id,
  ]);

  return rows;
}

export async function postCategory(nombre: string) {
  const { rows } = await pool.query(
    "INSERT INTO categorias (nombre) VALUES ($1) RETURNING *",
    [nombre]
  );

  return rows;
}

export async function deleteCategory(id: number) {
  const { rows } = await pool.query(
    "DELETE FROM categorias WHERE id = $1 RETURNING *",
    [id]
  );

  return rows;
}
