// Has to be called first.
import { AppLoggerService } from 'src/app/shared/services/app-logger.service';

export function AppLoggerDecorator(): MethodDecorator {
  return (classTarget, propertyKey: string, descriptor: PropertyDescriptor) => {
    const className = classTarget.constructor.name;

    descriptor.value = new Proxy(descriptor.value, {
      async apply(funcTarget, thisArg, args) {
        const appLoggerService: AppLoggerService = thisArg._appLoggerService;

        const name = AppLoggerService.getName(['AppLoggerDecorator', className, propertyKey]);

        const functionArgs = AppLoggerService.getArgs(args);
        appLoggerService.logFunctionIn(functionArgs, name);

        const data = await funcTarget.apply(thisArg, args);

        appLoggerService.logFunctionOut(JSON.stringify(data), name);

        return data;
      },
    });
  };
}
