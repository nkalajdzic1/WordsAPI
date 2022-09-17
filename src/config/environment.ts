import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  API_VERSION: process.env.API_VERSION,
};
