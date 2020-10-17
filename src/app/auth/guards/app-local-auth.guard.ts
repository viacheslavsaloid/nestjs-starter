import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppLoggerDecorator } from 'src/app/shared/decorators/helper';
import { AppLoggerService } from 'src/app/shared/services';

/**
 * @description Guard to check is user valid
 */
@Injectable()
export class AppLocalAuthGuard extends AuthGuard('local') {
  constructor(private readonly _appLoggerService: AppLoggerService) {
    super();
  }

  /**
   * @description Method, which calls on guarded endpoints
   */
  @AppLoggerDecorator()
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
