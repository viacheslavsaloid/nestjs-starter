import { Logger } from '@nestjs/common';
import { APP_MESSAGES } from 'src/assets/messages';
import { APP_REPLACE_KEY } from 'src/app/shared/helpers/variables';
import { AppLoggerArgsInterface, AppLoggerResponseInterface } from 'src/app/shared/interfaces/services';

/**
 * @description Sevice to easy work with logging
 */
export class AppLoggerService extends Logger {
  public logData(args: AppLoggerArgsInterface): AppLoggerResponseInterface {
    const { key, message, context } = args;

    this.log(APP_MESSAGES.LOGGER[key].replace(APP_REPLACE_KEY, message), context);
  }

  static getName(name: string | string[]): string {
    const names: string[] = typeof name === 'string' ? [name] : name;

    return names.reduce((pre, cur) => `${pre}${cur} -> `, '');
  }

  static getArgs(args): string {
    try {
      return JSON.stringify(args);
    } catch (err) {
      return '';
    }
  }
}
