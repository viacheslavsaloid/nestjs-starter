import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppLoggerService } from 'src/app/shared/services';

/**
 * @description Intreceptor to transform all data to one model
 */
@Injectable()
export class AppTransformInterceptor implements NestInterceptor {
  constructor(private readonly _appLoggerService: AppLoggerService) {}

  intercept(executionContext: ExecutionContext, next: CallHandler): Observable<any> {
    const { url, statusCode } = executionContext.switchToHttp().getRequest();
    const context = this.constructor.name;

    this._appLoggerService.logData({ key: 'INTERCEPTOR_IN', context, message: url });

    return next.handle().pipe(
      map(data => ({ data })),
      tap(response => {
        const message = JSON.stringify({
          url,
          response,
          code: statusCode,
        });

        this._appLoggerService.logData({ key: 'INTERCEPTOR_OUT', context, message });
      }),
    );
  }
}
