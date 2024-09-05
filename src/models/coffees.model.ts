import pool from "../config/database";

// Traer todos los productos
export async function getProducts() {
  const { rows } = await pool.query("SELECT * FROM productos");

  return rows;
}

// Traer producto buscando por Id
export async function getProduct(id: number) {
  const { rows } = await pool.query(`SELECT * FROM productos WHERE id = $1`, [
    id,
  ]);
  return rows;
}

// Agregar producto
export async function insertProduct(nombre: string, precio: number) {
  const { rows } = await pool.query(
    `INSERT INTO productos (nombre, precio) VALUES ($1, $2) RETURNING *`,
    [nombre, precio]
  );
  return rows;
}

// Editar datos del producto
export async function editProduct(id: number, nombre: string, precio: number) {
  console.log(`id: ${id} nombre: ${nombre} precio: ${precio}`);
  const { rows } = await pool.query(
    `UPDATE productos SET nombre = $2, precio = $3 WHERE id = $1 RETURNING *`,
    [id, nombre, precio]
  );
  console.log(rows);
  return rows;
}
