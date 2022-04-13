import pino from "pino";
import dotenv from "dotenv";
dotenv.config();

const log = pino({
  enabled: process.env.LOG_ENABLED === "true" ? true : false,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export const logger = log;
