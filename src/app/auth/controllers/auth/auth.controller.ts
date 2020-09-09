import { Body, Controller, Inject, Logger, LoggerService } from '@nestjs/common';
import { AppUserEntity } from 'src/app/auth/database';
import { AppEndpointDecorator, AppLoggerDecorator, AppSwaggerDecorator } from 'src/app/shared/decorators';
import { AppAuthSwaggerEndpoints } from 'src/app/auth/swagger/endpoints';
import { AppAuthEndpoints } from 'src/app/auth/endpoints';
import { AppAuthService } from 'src/app/auth/services';
import { AppJwtDto } from 'src/app/auth/dtos/app-jwt.dto';
import { AppGetUserDecorator } from 'src/app/auth/decorators';

@AppSwaggerDecorator(AppAuthSwaggerEndpoints.CORE)
@Controller()
export class AppAuthController {
  constructor(@Inject(Logger) private _logger: LoggerService, private _appAuthService: AppAuthService) {}

  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.SIGN_IN)
  @AppEndpointDecorator(AppAuthEndpoints.SIGN_IN)
  public signIn(@Body() user: any): AppJwtDto {
    return this._appAuthService.signIn(user);
  }

  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.SIGN_UP)
  @AppEndpointDecorator(AppAuthEndpoints.SIGN_UP)
  @AppLoggerDecorator()
  public signUp(@Body() user: AppUserEntity): Promise<AppJwtDto> {
    return this._appAuthService.signUp(user);
  }

  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.RESET_PASSWORD)
  @AppEndpointDecorator(AppAuthEndpoints.RESET_PASSWORD)
  public resetPassword(@Body() user: any): string {
    return this._appAuthService.resetPassword(user);
  }

  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.ME)
  @AppEndpointDecorator(AppAuthEndpoints.ME)
  public me(@AppGetUserDecorator() user: any): any {
    return user;
  }
}
