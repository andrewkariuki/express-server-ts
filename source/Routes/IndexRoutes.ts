import { CommonRoutesConfig } from "../Common";
import * as express from "express";

export class IndexRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "IndexRoutes");
  }

  configureRoutes() {
    this.app.route(`/`).get((req: express.Request, res: express.Response) => {
      res.render("index", { title: "Express" });
    });
    return this.app;
  }
}
