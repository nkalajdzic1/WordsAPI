// server logger class
export class Logger {
  static info = (message: string): void => {
    console.log(`[info]: ${message}`);
  };

  static warning = (message: string): void => {
    console.warn(`[warning]: ${message}`);
  };

  static error = (message: string): void => {
    console.error(`[error]: ${message}`);
  };
}
