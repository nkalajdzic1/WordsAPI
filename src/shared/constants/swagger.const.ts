import { ENV } from "@config/index";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Words API",
      version: "0.1.0",
      description: "REST API for english words",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "WordsAPI",
        url: "https://github.com/nkalajdzic1/WordsAPI",
        email: "nadir.kalajdzic@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${ENV.PORT}`,
      },
    ],
  },
  apis: [
    "./src/controllers/*Controller.ts",
    "./src/shared/swagger/*.schemas.ts",
  ],
};
