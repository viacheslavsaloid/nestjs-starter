import { APP_FILTER } from '@nestjs/core';
import { AppHttpExceptionFilter } from 'src/app/core/filters/app-http-exception.filter';

export const APP_CORE_FILTERS = [
  {
    provide: APP_FILTER,
    useClass: AppHttpExceptionFilter,
  },
];
