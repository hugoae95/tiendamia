import express from "express";
import offersRoutes from "./routes/offers";

const app = express();

app.get("/", (req, res) => {
  res.json({});
});

app.use("/", offersRoutes);

// Puerto en el que se ejecutará el servidor
const port = 5000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el  http://localhost:${port}`);
});
