import "reflect-metadata";

import express, { Application } from "express";

import { ENV, Injector } from "@config/index";
import { Logger } from "@shared/classes/index";

const app: Application = express();

Injector.injectControllers(app, `/api/${ENV.API_VERSION}`);

app.listen(ENV.PORT, () => {
  Logger.info(`Server is running at port ${ENV.PORT}`);
});
