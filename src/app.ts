import dotenv from "dotenv";
import express, { Express } from "express";
import setupRoutes from "./routes";

dotenv.config();

const app: Express = express();

setupRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
