import { Router } from "express";
import {
  getAllCategories,
  getCategory,
  postCategory,
  deleteCategory,
} from "../controllers/category.controller";

const routes = Router();

routes.get("/", getAllCategories);
routes.get("/:id", getCategory);
routes.post("/", postCategory);
routes.delete("/:id", deleteCategory);

export default routes;
