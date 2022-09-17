import { Request, Response } from "express";

import { Controller, Get } from "@shared/decorators/index";

@Controller("/words")
export class WordsController {
  @Get("/")
  public get = (_req: Request, res: Response) =>
    res.json({
      words: ["something"],
    });
}
