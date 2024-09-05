import * as categoryModel from "../models/category.model";

import { Request, Response } from "express";

export async function getAllCategories(_req: Request, res: Response) {
  try {
    const category = await categoryModel.getCategories();
    res.json(category);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getCategory(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const category = await categoryModel.getCategory(parseInt(id));
    res.json(category);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function postCategory(req: Request, res: Response) {
  const { nombre } = req.body;
  try {
    const category = await categoryModel.postCategory(nombre);
    res.json({
      message: `la categoria ${category[0].nombre} creada correctamente`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteCategory(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const category = await categoryModel.deleteCategory(parseInt(id));
    res.json({
      message: `la categoria ${category[0].nombre} eliminada correctamente`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
