import { Request, Response } from "express";
class UserController {
  index = (req: Request, res: Response) => {
    res.send("Test Controller Index");
  };

  find = (req: Request, res: Response) => {
    res.send("Test Controller Find");
  };

  create = (req: Request, res: Response) => {
    res.send("Test Controller Create");
  };

  update = (req: Request, res: Response) => {
    res.send("Test Controller Update");
  };

  patch = (req: Request, res: Response) => {
    res.send("Test Controller Patch");
  };

  delete = (req: Request, res: Response) => {
    res.send("Test Controller Delete");
  };
}

export default UserController;
