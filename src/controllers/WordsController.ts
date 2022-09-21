import { Request, Response } from "express";

import { WordsService } from "@services/index";
import { Controller, Get, Post } from "@decorators/index";

@Controller("/words")
export class WordsController {
  private wordsService: WordsService = new WordsService();

  /**
   * @param {Request} _req express http request
   * @param {Response} res express htpp response
   * @returns {Object} list of words
   * @swagger
   * /api/v1/words:
   *   get:
   *     tags:
   *       - "Words"
   *     summary: "Words List"
   *     description: Words List
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
      words: ["something"],
    });

  /**
   * @param {Request} _req express http request
   * @param {Response} res express htpp response
   * @returns {Object} created word
   * @swagger
   * /api/v1/words:
   *   post:
   *     summary: "Create word"
   *     description: Create word
   *     tags:
   *       - "Words"
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/Word'
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Internal Server error
   */
  @Post("/")
  public post = (_req: Request, res: Response): Object => {
    return res.json({
      number: this.wordsService.getNum(),
    });
  };
}
