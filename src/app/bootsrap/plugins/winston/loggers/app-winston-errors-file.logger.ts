import winston, { format } from 'winston';

export function getAppWinstonErrorsFileLogger(dirname = 'logs') {
  return new winston.transports.DailyRotateFile({
    dirname,
    level: 'error',
    filename: '%DATE%.errors.log',
    datePattern: 'YYYY.MM.DD',
    format: format.combine(format.timestamp({ format: 'HH:mm:ss' }), format.json()),
  });
}
