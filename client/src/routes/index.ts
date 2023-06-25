import express from "express";
import offers from "./offers";

const app = express();
app.use(offers);

export default app;
