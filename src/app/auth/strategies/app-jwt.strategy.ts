import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppHelperService } from 'src/app/shared/services';
import { AppUserEntity } from 'src/app/auth/database';
import { AppConfigService } from 'src/app/shared/services/config/app-config.service';

/**
 * @description class for jwt strategy setup. Init with secret key and ignore expiration field
 */
@Injectable()
export class AppJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _appConfigService: AppConfigService,
    private readonly _appHelperService: AppHelperService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: _appConfigService.isDev,
      secretOrKey: _appConfigService.get('JWT_SECRET'),
    });
  }

  /**
   * @description Method to validate user
   * @param payload - user
   * @returns user without password
   */
  validate(payload: AppUserEntity): AppUserEntity {
    return this._appHelperService.parseObject({ object: payload, exclude: ['password'] });
  }
}
