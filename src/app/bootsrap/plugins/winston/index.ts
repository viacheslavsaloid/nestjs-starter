import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import {
  getAppWinstonConsoleLogger,
  getAppWinstonCombinedFileLogger,
  getAppWinstonErrorsFileLogger,
  getAppWinstonRollbarLogger,
} from 'src/app/bootsrap/plugins/winston/loggers';

import 'winston-daily-rotate-file';
import TransportStream from 'winston-transport';

export function appWinston(configService: ConfigService): LoggerService {
  const logsFolder = configService.get<string>('LOGS_FOLDER');

  const logInConsole = configService.get<string>('LOG_IN_CONSOLE');
  const logErrorsInFile = configService.get<string>('LOG_ERRORS_IN_FILE');
  const logCombinedInFile = configService.get<string>('LOG_COMBINED_IN_FILE');
  const logErrorsInRollbar = configService.get<string>('LOG_ERRORS_IN_ROLLBAR');

  const transports: TransportStream[] = [];

  if (logInConsole !== 'false') {
    const consoleLogger = getAppWinstonConsoleLogger();
    transports.push(consoleLogger);
  }

  if (logErrorsInFile !== 'false') {
    const fileErrorsLogger = getAppWinstonErrorsFileLogger(logsFolder);
    transports.push(fileErrorsLogger);
  }

  if (logCombinedInFile !== 'false') {
    const fileCombinedLogger = getAppWinstonCombinedFileLogger(logsFolder);
    transports.push(fileCombinedLogger);
  }

  if (logErrorsInRollbar !== 'false') {
    const rollbarLogger = getAppWinstonRollbarLogger(configService);
    transports.push(rollbarLogger);
  }

  return WinstonModule.createLogger({
    transports,
  });
}
