import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AppAuthService } from '../services';
import { AppUserEntity } from 'src/app/auth/database';

/**
 * @description class for jwt strategy setup. Init with secret key and ignore expiration field
 */
@Injectable()
export class AppLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _appAuthService: AppAuthService) {
    super();
  }

  /**
   * @description Method to validate user
   * @param email
   * @param password
   * @returns user with email and password
   */
  validate(email: string, password: string): Promise<AppUserEntity> {
    return this._appAuthService.getUser({ email, password });
  }
}
