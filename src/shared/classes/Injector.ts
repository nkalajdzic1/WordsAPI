import { Application, json as jsonBodyParser } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

// import all controllers from the controllers folder
// IMPORTANT NOTE: all controllers need to be in the controllers folder
// for this folder architecture
import * as controllers from "@controllers/index";
import { IRoute } from "@interfaces/index";
import { ENV } from "@config/index";

// class to inject all the configuration to the server (swagger, routes, etc.)
export class Injector {
  /**
   * @description
   * @param {string} routePrefix
   * @returns {void}
   */
  public static injectControllers = (
    app: Application,
    routePrefix: string = ""
  ): void => {
    Object.values(controllers).forEach((controller) => {
      // instantiated class
      const instance = new controller();
      // The prefix saved to controller
      const prefix = Reflect.getMetadata("prefix", controller);
      // array containing all our routes for this controller
      const routes: Array<IRoute> = Reflect.getMetadata("routes", controller);

      // Iterate over all routes and register them to our express application
      routes.forEach((route) => {
        (app as any)[route.requestMethod](
          `${routePrefix}${prefix}${route.path}`,
          (...params: any[]) => {
            // Execute our method for this path and pass our express request and response object.
            (instance as any)[route.methodName](...params);
          }
        );
      });
    });
  };

  /**
   * @description
   * @param {Object} options
   * @returns {void}
   */
  public static injectSwagger = (app: Application, options: Object): void => {
    // create documentation
    const openapiSpecification = swaggerJsDoc(options);

    // inject swagger to app
    app.use(
      `/swagger/${ENV.API_VERSION}`,
      swaggerUi.serve,
      swaggerUi.setup(openapiSpecification)
    );
  };

  public static injectConfig = (app: Application) => {
    // enable request body
    app.use(jsonBodyParser());
  };
}
