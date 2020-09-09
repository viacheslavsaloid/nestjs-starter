import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const APP_JWT_CONFIGS = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): JwtModuleOptions => ({
    secret: configService.get('JWT_SECRET'),
    signOptions: { expiresIn: '365d' },
  }),
};
