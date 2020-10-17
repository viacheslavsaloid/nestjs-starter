import winston from 'winston';
import { utilities } from 'nest-winston';

/**
 * @description function to write errors to console.
 */
export function getAppWinstonConsoleLogger(): winston.transport {
  return new winston.transports.Console({
    format: winston.format.combine(utilities.format.nestLike()),
  });
}
