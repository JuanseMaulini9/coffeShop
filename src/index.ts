import express from "express";
import dotenv from "dotenv";

import routes from "./routes/products";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
