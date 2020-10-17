import winston from 'winston';

import { APP_REPLACE_KEY } from 'src/app/shared/helpers/variables';

export const APP_WINSTON_FILE_LOGGER_FILE_NAME = `%DATE%.${APP_REPLACE_KEY}.log`;
export const APP_WINSTON_FILE_LOGGER_DATE_PATTERN = 'YYYY.MM.DD';
export const APP_WINSTON_FILE_LOGGER_FORMAT = winston.format.combine(
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.json(),
);
