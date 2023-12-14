import dotenv from "dotenv";
import express, { Express } from "express";
import RouteGroup from "express-route-grouping";
import TestController from "./controllers/TestController";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

const root = new RouteGroup("/", app);

root.group("/api/v1", (api) => {
  api.get("/", (req, res) => {
    res.send("Hello World");
  });

  api.group("/test", ({ resource }) => {
    resource({
      handlers: new TestController(),
    });
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
