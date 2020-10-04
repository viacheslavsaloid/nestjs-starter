import { Logger } from '@nestjs/common';
import { APP_MESSAGES } from 'src/assets/messages';
import { APP_REPLACE_KEY } from 'src/app/shared/utils';

export class AppLoggerService extends Logger {
  public logInterceptorIn(message: string, context?: string): void {
    this.log(APP_MESSAGES.LOGGER.INTERCEPTOR.IN.replace(APP_REPLACE_KEY, message), context);
  }

  public logInterceptorOut(message: string, context?: string): void {
    this.log(APP_MESSAGES.LOGGER.INTERCEPTOR.OUT.replace(APP_REPLACE_KEY, message), context);
  }

  public logFunctionIn(message: string, context?: string): void {
    this.log(APP_MESSAGES.LOGGER.INTERCEPTOR.IN.replace(APP_REPLACE_KEY, message), context);
  }

  public logFunctionOut(message: string, context?: string): void {
    this.log(APP_MESSAGES.LOGGER.INTERCEPTOR.OUT.replace(APP_REPLACE_KEY, message), context);
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
