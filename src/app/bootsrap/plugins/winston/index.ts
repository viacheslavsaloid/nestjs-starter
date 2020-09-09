import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import 'winston-daily-rotate-file';

import {
  getAppWinstonConsoleLogger,
  getAppWinstonCombinedFileLogger,
  getAppWinstonErrorsFileLogger,
  getAppWinstonRollbarLogger,
} from 'src/app/bootsrap/plugins/winston/loggers';

export function appWinston(configService: ConfigService): LoggerService {
  const logsFolder = configService.get('LOGS_FOLDER');
  const mode = configService.get('MODE');

  const transports = [];

  if (mode === 'development') {
    const consoleLogger = getAppWinstonConsoleLogger();
    transports.push(consoleLogger);
  } else {
    const fileCombinedLogger = getAppWinstonCombinedFileLogger(logsFolder);
    const fileErrorsLogger = getAppWinstonErrorsFileLogger(logsFolder);
    const rollbarLogger = getAppWinstonRollbarLogger(configService);
    transports.push([fileCombinedLogger, fileErrorsLogger, rollbarLogger]);
  }

  return WinstonModule.createLogger({
    transports,
  });
}
