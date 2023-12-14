import dotenv from "dotenv";
import express, { Express, Request, Response, Router } from "express";
import RouteGroup from "express-route-grouping";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

const root = new RouteGroup("/", app);

root.group("/api/v1", (router: Router) => {
  router.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
