import * as productModel from "../models/coffees.model";

import { Request, Response } from "express";

export async function getAllProducts(_req: Request, res: Response) {
  try {
    const products = await productModel.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await productModel.getProduct(parseInt(id));
    if (product.length === 0) {
      return res.status(404).json({ message: "No se encontro el producto" });
    }
    res.json(product[0]);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function postProduct(req: Request, res: Response) {
  const { nombre, precio } = req.body;
  try {
    const product = await productModel.insertProduct(nombre, precio);
    console.log(product);
    res
      .status(200)
      .json({ message: `Producto ${product[0].nombre} añadido con exito` });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function putProduct(req: Request, res: Response) {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  try {
    const product = await productModel.editProduct(
      parseInt(id),
      nombre,
      precio
    );
    console.log(product);
    res
      .status(200)
      .json({ message: `Producto ${product[0].nombre} añadido con exito` });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
