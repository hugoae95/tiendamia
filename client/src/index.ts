import express from "express";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";

const app = express();
const swaggerDocument = require("./../swagger.json");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({});
});

app.use(routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
