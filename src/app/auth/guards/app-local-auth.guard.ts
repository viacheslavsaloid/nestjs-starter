import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppLoggerDecorator } from 'src/app/shared/decorators';
import { AppLoggerService } from 'src/app/shared/services';

@Injectable()
export class AppLocalAuthGuard extends AuthGuard('local') {
  constructor(private readonly _appLoggerService: AppLoggerService) {
    super();
  }

  @AppLoggerDecorator()
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
