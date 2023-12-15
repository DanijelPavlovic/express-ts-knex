import { Express } from "express";
import RouteGroup from "express-route-grouping";
import UserController from "../controllers/UserController";

export default function (app: Express) {
  const root = new RouteGroup("/", app);

  root.group("/api/v1", (api) => {
    api.get("/", (req, res) => {
      res.send("Hello World");
    });

    api.group("/user", ({ resource }) => {
      resource({
        handlers: new UserController(),
      });
    });
  });
}
