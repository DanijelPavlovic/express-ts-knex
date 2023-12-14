import dotenv from "dotenv";
import express, { Express, Request, Response, Router } from "express";
import RouteGroup from "express-route-grouping";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

const root = new RouteGroup("/", app);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

root.group("/api/v1", (router: Router) => {
  router.get("/test", (req: Request, res: Response) => {
    res.send("Hello World");
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
