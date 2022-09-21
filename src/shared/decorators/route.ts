import { REQUEST_METHODS } from "@constants/index";
import { IRoute } from "@interfaces/index";

/**
 *
 * @param {'get' | 'post' | 'put' | 'patch' | 'delete' | 'options'} requestMethod
 *        type of request
 * @param {string} path route path
 * @returns decorator
 */
const createRouteDecorator = (requestMethod: string, path: string) => {
  // `target` equals our class, `propertyKey` equals our decorated method name
  return (target: any, propertyKey: string): void => {
    // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
    // To prevent any further validation simply set it to an empty array here.
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    // Get the routes stored so far, extend it by the new route and re-set the metadata.
    const routes = Reflect.getMetadata(
      "routes",
      target.constructor
    ) as Array<IRoute>;

    routes.push({
      requestMethod,
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};

// web api route decorators (get, post, put, ...)

export const Get = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.GET, path);

export const Post = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.POST, path);

export const Put = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.PUT, path);

export const Patch = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.PATCH, path);

export const Delete = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.DELETE, path);

export const Options = (path: string): any =>
  createRouteDecorator(REQUEST_METHODS.OPTIONS, path);
