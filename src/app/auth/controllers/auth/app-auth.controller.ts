import { Body, Controller } from '@nestjs/common';
import { AppLoggerDecorator, AppSwaggerDecorator } from 'src/app/shared/decorators/helper';
import { AppEndpointDecorator } from 'src/app/shared/decorators/controller';
import { AppAuthSwaggerEndpoints } from 'src/app/auth/swagger/endpoints';
import { AppAuthEndpoints } from 'src/app/auth/endpoints';
import { AppAuthService } from 'src/app/auth/services';
import { AppGetUserDecorator } from 'src/app/auth/decorators';
import { AppLoggerService } from 'src/app/shared/services/logger/app-logger.service';
import {
  AppAuthControllerMeArgsInterface,
  AppAuthControllerMeResponseInterface,
  AppAuthControllerResetPasswordArgsInterface,
  AppAuthControllerResetPasswordResponseInterface,
  AppAuthControllerSignInArgsInterface,
  AppAuthControllerSignInResponseInterface,
  AppAuthControllerSignUpArgsInterface,
  AppAuthControllerSignUpResponseInterface,
} from 'src/app/auth/interfaces/controllers';

/**
 * @description Controller to accept all auth endpoints
 */
@AppSwaggerDecorator(AppAuthSwaggerEndpoints.CORE)
@Controller()
export class AppAuthController {
  constructor(private readonly _appLoggerService: AppLoggerService, private readonly _appAuthService: AppAuthService) {}

  /**
   * @description method to signin with email and pasword
   */
  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.SIGN_IN)
  @AppEndpointDecorator(AppAuthEndpoints.SIGN_IN)
  @AppLoggerDecorator()
  public signIn(@Body() args: AppAuthControllerSignInArgsInterface): AppAuthControllerSignInResponseInterface {
    return this._appAuthService.signIn(args);
  }

  /**
   * @description Method to signup with email or password
   */
  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.SIGN_UP)
  @AppEndpointDecorator(AppAuthEndpoints.SIGN_UP)
  @AppLoggerDecorator()
  public signUp(@Body() args: AppAuthControllerSignUpArgsInterface): AppAuthControllerSignUpResponseInterface {
    return this._appAuthService.signUp(args);
  }

  /**
   * @description Method to reset password by email. Have to send mail with password to user email
   */
  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.RESET_PASSWORD)
  @AppEndpointDecorator(AppAuthEndpoints.RESET_PASSWORD)
  @AppLoggerDecorator()
  public resetPassword(
    @Body() args: AppAuthControllerResetPasswordArgsInterface,
  ): AppAuthControllerResetPasswordResponseInterface {
    return this._appAuthService.resetPassword(args);
  }

  /**
   * @description Method to get current user. If jwt guard accept token, it will return user. If not - error
   */
  @AppSwaggerDecorator(AppAuthSwaggerEndpoints.ME)
  @AppEndpointDecorator(AppAuthEndpoints.ME)
  @AppLoggerDecorator()
  public me(@AppGetUserDecorator() args: AppAuthControllerMeArgsInterface): AppAuthControllerMeResponseInterface {
    return args;
  }
}
