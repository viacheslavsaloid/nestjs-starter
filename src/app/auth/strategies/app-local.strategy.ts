import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AppAuthService } from '../services';

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
      throw new UnauthorizedException(null, 'Wrong Email');
    }

    const isPasswordValid = await this._appAuthService.validate({
      field: 'password',
      value: password,
    });

    if (!isPasswordValid) {
      throw new UnauthorizedException(null, 'Wrong Password');
    }

    return await this._authService.getUser(username);
  }
}
