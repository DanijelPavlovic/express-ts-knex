import { Request, Response } from "express";
class TestController {
  // GET: /products
  index = (req: Request, res: Response) => {
    res.send("Test Controller Index");
  };

  // GET: /products/:productId
  find = (req: Request, res: Response) => {
    res.send("Test Controller Find");
  };

  // POST: /products
  create = (req: Request, res: Response) => {
    res.send("Test Controller Create");
  };

  // PUT: /products/:productId
  update = (req: Request, res: Response) => {
    res.send("Test Controller Update");
  };

  // PATCH: /products/:productId
  patch = (req: Request, res: Response) => {
    res.send("Test Controller Patch");
  };

  // DELETE: /products/:productId
  delete = (req: Request, res: Response) => {
    res.send("Test Controller Delete");
  };
}

export default TestController;
