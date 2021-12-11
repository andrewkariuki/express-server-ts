import { CommonRoutesConfig } from "../Common";
import * as express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes() {
    this.app.route(`/users`).get();
    return this.app;
  }
}
