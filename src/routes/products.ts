import { Router } from "express";
import getAllCoffees from "../controllers/getAllCoffees";
import postCoffee from "../controllers/postCoffee";

const routes = Router();

routes.get("/", getAllCoffees);

routes.post("/post", postCoffee);

export default routes;
