import express, { Application, Request, Response } from "express";

import { ENV } from "@config/index";
import { Logger } from "@shared/classes/index";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(ENV.PORT, () => {
  Logger.info(`Server is running at port ${ENV.PORT}`);
});
