import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppLoggingInterceptor implements NestInterceptor {
  private context = 'AppLoggingInterceptor';

  constructor(@Inject(Logger) private _logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { url } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    this._logger.log(`Request for: ${url}`, `${this.context}:intercept`);

    const now = Date.now();
    return next.handle().pipe(
      tap(res => {
        const diffTime = Date.now() - now;
        this._logger.log(
          `Response: ${JSON.stringify(res)} for ${url} with statusCode: ${statusCode} after ${diffTime} ms`,
          `${this.context}:intercept`,
        );
      }),
    );
  }
}
