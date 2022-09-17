import { Request, Response } from "express";

import { Controller, Get } from "@shared/decorators/index";

@Controller("/health")
export class HealthController {
  @Get("/")
  public get = (_req: Request, res: Response) =>
    res.json({
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    });
}
