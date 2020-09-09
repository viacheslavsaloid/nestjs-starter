// Has to be called first.
import { LoggerService } from '@nestjs/common';

export function AppLoggerDecorator(): MethodDecorator {
  return (classTarget, propertyKey: string, descriptor: PropertyDescriptor) => {
    const className = classTarget.constructor.name;

    descriptor.value = new Proxy(descriptor.value, {
      async apply(funcTarget, thisArg, args) {
        try {
          const loggerService: LoggerService = thisArg._logger;

          let funcArgs = '';

          try {
            funcArgs = JSON.stringify(args);
          } catch (err) {}

          loggerService.log(`Call with args: ${funcArgs}`, `${className}:${propertyKey}`);

          const result = await funcTarget.apply(thisArg, args);

          loggerService.log(`Return: ${JSON.stringify(result)}`, `${className}:${propertyKey}`);

          return result;
        } catch (err) {
          console.error(`[${this.constructor.name}]: Maybe you forgot to inject logger \n`, err);
        }
      },
    });
  };
}
