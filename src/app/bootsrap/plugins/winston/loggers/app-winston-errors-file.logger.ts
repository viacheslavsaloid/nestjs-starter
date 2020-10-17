import winston, { format } from 'winston';

/**
 * @description function to write errors to file.
 */
export function getAppWinstonErrorsFileLogger(dirname = 'logs'): winston.transport {
  return new winston.transports.DailyRotateFile({
    dirname,
    level: 'error',
    filename: '%DATE%.errors.log',
    datePattern: 'YYYY.MM.DD',
    format: format.combine(format.timestamp({ format: 'HH:mm:ss' }), format.json()),
  });
}
