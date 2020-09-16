import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_JWT_CONFIGS, APP_PASSPORT_CONFIGS } from './configs';
import { APP_AUTH_GUARDS } from './guards';
import { APP_AUTH_STRATEGIES } from './strategies';
import { APP_AUTH_CONTROLLERS } from './controllers';
import { APP_AUTH_ENTETIES } from './database';
import { APP_AUTH_SERVICES } from './services';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AppExportsType, AppImportsType, AppProvidersType } from 'src/app/shared/interfaces/utils';

export const APP_AUTH_IMPORTS: AppImportsType = [
  AppSharedModule,
  PassportModule.register(APP_PASSPORT_CONFIGS),
  JwtModule.registerAsync(APP_JWT_CONFIGS),
  TypeOrmModule.forFeature(APP_AUTH_ENTETIES),
];
export const APP_AUTH_PROVIDERS: AppProvidersType = [...APP_AUTH_SERVICES, ...APP_AUTH_GUARDS, ...APP_AUTH_STRATEGIES];
export const APP_AUTH_EXPORTS: AppExportsType = [...APP_AUTH_PROVIDERS];

@Module({
  imports: APP_AUTH_IMPORTS,
  controllers: APP_AUTH_CONTROLLERS,
  providers: APP_AUTH_PROVIDERS,
  exports: APP_AUTH_EXPORTS,
})
export class AppAuthModule {}
