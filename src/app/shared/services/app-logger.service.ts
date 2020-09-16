import { Logger } from '@nestjs/common';

export class AppLoggerService extends Logger {
  public logInterceptorIn(message: string, context?: string): void {
    this.log(`Interceptor in: ${message}`, context);
  }

  public logInterceptorOut(message: string, context?: string): void {
    this.log(`Interceptor out: ${message}`, context);
  }

  public logFunctionIn(message: string, context?: string): void {
    this.log(`Function In: ${message}`, context);
  }

  public logFunctionOut(message: string, context?: string): void {
    this.log(`Function Out: ${message}`, context);
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
