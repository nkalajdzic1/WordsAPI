import express, { Application, Request, Response } from "express";

import { ENV } from "@config/environment";

const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(ENV.PORT, () => {
  console.log(`[server]: Server is running at port ${ENV.PORT}`);
});
