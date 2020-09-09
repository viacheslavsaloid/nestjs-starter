import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AppAuthService } from '../services';

@Injectable()
export class AppLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AppAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const isUsernameValid = await this._authService.validate('username', username);
    if (!isUsernameValid) {
      throw new UnauthorizedException(null, 'Wrong Email');
    }

    const isPasswordValid = await this._authService.validate('password', password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(null, 'Wrong Password');
    }

    return await this._authService.getUser(username);
  }
}
