import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
} from "../controllers/coffee.controller";

const routes = Router();

routes.get("/", getAllProducts);
routes.get("/:id", getProduct);
routes.post("/", postProduct);
routes.put("/:id", putProduct);

export default routes;
