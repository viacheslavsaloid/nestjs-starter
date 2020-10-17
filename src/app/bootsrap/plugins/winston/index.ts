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
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Method, which setup winston for application
 */
export function appWinston(appConfigService: AppConfigService): LoggerService {
  const logsFolder = appConfigService.get('LOGS_FOLDER');

  const logInConsole = appConfigService.get('LOG_IN_CONSOLE');
  const logErrorsInFile = appConfigService.get('LOG_ERRORS_IN_FILE');
  const logCombinedInFile = appConfigService.get('LOG_COMBINED_IN_FILE');
  const logErrorsInRollbar = appConfigService.get('LOG_ERRORS_IN_ROLLBAR');

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
    const rollbarLogger = getAppWinstonRollbarLogger(appConfigService);
    transports.push(rollbarLogger);
  }

  return WinstonModule.createLogger({
    transports,
  });
}
