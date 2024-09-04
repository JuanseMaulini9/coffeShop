import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
