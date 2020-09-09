import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppLoggingInterceptor } from 'src/app/core/interceptors/app-logging.interceptor';
import { AppTransformInterceptor } from 'src/app/core/interceptors/app-transform.interceptor';

export const APP_CORE_INTERCEPTORS = [
  {
    provide: APP_INTERCEPTOR,
    useClass: AppTransformInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: AppLoggingInterceptor,
  },
];
