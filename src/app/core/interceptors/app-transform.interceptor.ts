import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppLoggerService } from 'src/app/shared/services/app-logger.service';

@Injectable()
export class AppTransformInterceptor implements NestInterceptor {
  constructor(private readonly _appLoggerService: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { url, statusCode } = context.switchToHttp().getRequest();

    this._appLoggerService.logInterceptorIn(url, this.constructor.name);

    return next.handle().pipe(
      map(data => ({ data })),
      tap(response => {
        const logMessage = JSON.stringify({
          url,
          response,
          code: statusCode,
        });
        this._appLoggerService.logInterceptorOut(logMessage, this.constructor.name);
      }),
    );
  }
}
