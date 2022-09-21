import { Request, Response } from "express";

import { Controller, Get } from "@decorators/index";

@Controller("/health")
export class HealthController {
  /**
   * @param {Request} _req express http request
   * @param {Response} res express htpp response
   * @returns {Object} data of the server health
   * @swagger
   * /api/v1/health:
   *   get:
   *     tags:
   *       - "Health"
   *     summary: "Checks if server is up and running"
   *     description: Checks if server is up and running
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Internal Server error
   */
  @Get("/")
  public get = (_req: Request, res: Response): Object =>
    res.json({
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    });
}
