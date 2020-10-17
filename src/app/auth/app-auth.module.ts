import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_JWT_CONFIG, APP_PASSPORT_CONFIG } from './configs';
import { APP_AUTH_GUARDS } from './guards';
import { APP_AUTH_STRATEGIES } from './strategies';
import { APP_AUTH_CONTROLLERS } from './controllers';
import { APP_AUTH_ENTETIES } from './database';
import { APP_AUTH_SERVICES } from './services';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AppExportsInterface, AppImportsInterface, AppProvidersInterface } from 'src/app/shared/interfaces/helpers';

const APP_AUTH_IMPORTS: AppImportsInterface = [
  AppSharedModule,
  PassportModule.register(APP_PASSPORT_CONFIG),
  JwtModule.registerAsync(APP_JWT_CONFIG),
  TypeOrmModule.forFeature(APP_AUTH_ENTETIES),
];
const APP_AUTH_PROVIDERS: AppProvidersInterface = [...APP_AUTH_SERVICES, ...APP_AUTH_GUARDS, ...APP_AUTH_STRATEGIES];
const APP_AUTH_EXPORTS: AppExportsInterface = [...APP_AUTH_PROVIDERS];

@Module({
  imports: APP_AUTH_IMPORTS,
  controllers: APP_AUTH_CONTROLLERS,
  providers: APP_AUTH_PROVIDERS,
  exports: APP_AUTH_EXPORTS,
})
export class AppAuthModule {}
