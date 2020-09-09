import { ExecutionContext, Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppLoggerDecorator } from 'src/app/shared/decorators';

@Injectable()
export class AppJwtAuthGuard extends AuthGuard('jwt') {
  constructor(@Inject(Logger) private readonly _logger: LoggerService) {
    super();
  }

  @AppLoggerDecorator()
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
