import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AppAuthService } from '../services';
import { APP_MESSAGES } from 'src/assets/messages';

@Injectable()
export class AppLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _appAuthService: AppAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const isUsernameValid = await this._appAuthService.validate({
      field: 'username',
      value: username,
    });

    if (!isUsernameValid) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.INVALID_EMAIL);
    }

    const isPasswordValid = await this._appAuthService.validate({
      field: 'password',
      value: password,
    });

    if (!isPasswordValid) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.INVALID_PASSWORD);
    }

    return await this._authService.getUser(username);
  }
}
