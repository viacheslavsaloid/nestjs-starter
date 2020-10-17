import {
  APP_WINSTON_FILE_LOGGER_DATE_PATTERN,
  APP_WINSTON_FILE_LOGGER_FILE_NAME,
  APP_WINSTON_FILE_LOGGER_FORMAT,
} from 'src/app/bootsrap/plugins/winston/helpers';

import { APP_REPLACE_KEY } from 'src/app/shared/helpers/variables';
import winston from 'winston';

/**
 * @description function to write all logs to file, parsed by date.
 */
export function getAppWinstonCombinedFileLogger(dirname = 'logs'): winston.transport {
  return new winston.transports.DailyRotateFile({
    dirname,
    filename: APP_WINSTON_FILE_LOGGER_FILE_NAME.replace(APP_REPLACE_KEY, 'combined'),
    datePattern: APP_WINSTON_FILE_LOGGER_DATE_PATTERN,
    format: APP_WINSTON_FILE_LOGGER_FORMAT,
  });
}
