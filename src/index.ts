import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/products.routes";
import categoryRoutes from "./routes/category.routes";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
