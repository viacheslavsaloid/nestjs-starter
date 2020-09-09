import { Logger, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_JWT_CONFIGS, APP_PASSPORT_CONFIGS } from './configs';
import { AUTH_GUARDS } from './guards';
import { APP_AUTH_STRATEGIES } from './strategies';
import { AUTH_CONTROLLERS } from './controllers';
import { APP_AUTH_ENTETIES } from './database';
import { APP_AUTH_SERVICES } from './services';

export const AUTH_IMPORTS = [
  PassportModule.register(APP_PASSPORT_CONFIGS),
  JwtModule.registerAsync(APP_JWT_CONFIGS),
  TypeOrmModule.forFeature(APP_AUTH_ENTETIES),
];
export const AUTH_PROVIDERS = [...APP_AUTH_SERVICES, ...AUTH_GUARDS, ...APP_AUTH_STRATEGIES, Logger];
export const AUTH_EXPORTS = [...AUTH_PROVIDERS];

@Module({
  imports: AUTH_IMPORTS,
  controllers: AUTH_CONTROLLERS,
  providers: AUTH_PROVIDERS,
  exports: AUTH_EXPORTS,
})
export class AppAuthModule {}
