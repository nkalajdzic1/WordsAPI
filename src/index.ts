// import metadata for custom decorators
import "reflect-metadata";

import express, { Application } from "express";

import { ENV, Injector } from "@config/index";
import { Logger } from "@shared/classes/index";

// create an instance of an server
const app: Application = express();

// inject all controllers
Injector.injectControllers(app, `/api/${ENV.API_VERSION}`);

// start server
app.listen(ENV.PORT, () => {
  Logger.info(`Server is running at port ${ENV.PORT}`);
});
