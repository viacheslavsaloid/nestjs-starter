// Has to be called first.
import { AppLoggerService } from 'src/app/shared/services/logger/app-logger.service';

/**
 * @description Decorator to easy work with logging data
 */
export function AppLoggerDecorator(): MethodDecorator {
  return (classTarget, propertyKey: string, descriptor: PropertyDescriptor) => {
    const className = classTarget.constructor.name;

    descriptor.value = new Proxy(descriptor.value, {
      async apply(funcTarget, thisArg, args) {
        const appLoggerService: AppLoggerService = thisArg._appLoggerService;
        const context = AppLoggerService.getName(['AppLoggerDecorator', className, propertyKey]);
        const functionArgs = AppLoggerService.getArgs(args);

        appLoggerService.logData({ key: 'FUNCTION_IN', context, message: functionArgs });

        const data = await funcTarget.apply(thisArg, args);

        appLoggerService.logData({ key: 'FUNCTION_OUT', context, message: data });

        return data;
      },
    });
  };
}
