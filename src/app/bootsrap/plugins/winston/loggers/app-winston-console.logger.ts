import winston from 'winston';
import { utilities } from 'nest-winston';

export function getAppWinstonConsoleLogger(): winston.transport {
  return new winston.transports.Console({
    format: winston.format.combine(utilities.format.nestLike()),
  });
}
