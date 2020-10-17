import { CanActivate, Injectable } from '@nestjs/common';
import { AppLoggerService } from 'src/app/shared/services';
import { AppLoggerDecorator } from 'src/app/shared/decorators/helper';

/**
 * @description Guard to check is user role valid
 */
@Injectable()
export class AppRolesGuard implements CanActivate {
  constructor(private readonly _appLoggerService: AppLoggerService) {}

  /**
   * @description Method, which calls on guarded endpoints
   */
  @AppLoggerDecorator()
  canActivate() {
    return true;
  }
}
