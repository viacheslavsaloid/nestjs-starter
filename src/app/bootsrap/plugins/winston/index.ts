import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  getAppWinstonConsoleLogger,
  getAppWinstonCombinedFileLogger,
  getAppWinstonErrorsFileLogger,
  getAppWinstonRollbarLogger,
} from 'src/app/bootsrap/plugins/winston/loggers';
import { AppEnvEnum } from 'src/app/shared/interfaces/utils/app-env.enum';

import 'winston-daily-rotate-file';

export function appWinston(configService: ConfigService): LoggerService {
  const logsFolder = configService.get('LOGS_FOLDER');
  const mode = configService.get('MODE');

  const transports = [];

  if (mode === AppEnvEnum.PROD) {
    const fileCombinedLogger = getAppWinstonCombinedFileLogger(logsFolder);
    const fileErrorsLogger = getAppWinstonErrorsFileLogger(logsFolder);
    const rollbarLogger = getAppWinstonRollbarLogger(configService);
    transports.push(fileCombinedLogger, fileErrorsLogger, rollbarLogger);
  } else {
    const consoleLogger = getAppWinstonConsoleLogger();
    transports.push(consoleLogger);
  }

  return WinstonModule.createLogger({
    transports,
  });
}
