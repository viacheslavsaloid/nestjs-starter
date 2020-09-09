import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AppJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private _configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: _configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any): Promise<Partial<any>> {
    const user = { ...payload };

    delete user.password;

    return user;
  }
}
