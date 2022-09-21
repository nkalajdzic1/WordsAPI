// import metadata for custom decorators
import "reflect-metadata";

import { ENV } from "@config/index";
import { Logger, Injector, App } from "@classes/index";
import { swaggerOptions } from "@constants/index";

const app = App.getInstance();

// inject configuration (enabling request body, cors, etc.)
Injector.injectConfig(app);

// inject all controllers
Injector.injectControllers(app, `/api/${ENV.API_VERSION}`);

// inject swagger, must come after injecting the controllers
// to configure the docs properly
Injector.injectSwagger(app, swaggerOptions);

// start server
app.listen(ENV.PORT, () =>
  Logger.info(`Server is running at port ${ENV.PORT}`)
);
