import { Application, Request, Response } from "express";

// import all controllers from the controllers folder
// IMPORTANT NOTE: all controllers need to be in the controllers folder
// for this folder architecture
import * as controllers from "@controllers/index";
import { IRoute } from "@shared/interfaces/index";

// TODO: customize the injector more to enable middlewares and etc.
export class Injector {
  public static injectControllers = (
    app: Application,
    routePrefix: string = ""
  ) => {
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
          (req: Request, res: Response) => {
            // Execute our method for this path and pass our express request and response object.
            (instance as any)[route.requestMethod](req, res);
          }
        );
      });
    });
  };
}
