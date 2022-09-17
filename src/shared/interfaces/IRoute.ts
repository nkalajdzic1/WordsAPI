import { REQUEST_METHODS } from "@shared/constants/index";

const requests = Object.values(REQUEST_METHODS);
type requestMethods = typeof requests[number];

export interface IRoute {
  // Path to our route
  path: string;
  // HTTP Request method (get, post, ...)
  requestMethod: requestMethods;
  // Method name within our class responsible for this route
  methodName: string;
}
