import { Express } from "express";
import RouteGroup from "express-route-grouping";
import TestController from "../controllers/TestController";

export default function (app: Express) {
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
}
