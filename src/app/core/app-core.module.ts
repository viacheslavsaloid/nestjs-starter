import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusMonitorModule } from 'nest-status-monitor';
import { AppMediaModule } from 'src/app/media/app-media.module';
import { AppImportsType, AppProvidersType } from 'src/app/shared/interfaces/utils';

import { APP_CONFIGS, APP_STATUS_MONITOR_CONFIGS, APP_TYPEORM_CONFIGS } from './configs';

import { APP_CORE_INTERCEPTORS } from 'src/app/core/interceptors';
import { APP_CORE_FILTERS } from 'src/app/core/filters';

import { AppShopModule } from 'src/app/shop/app-shop.module';
import { AppAuthModule } from 'src/app/auth/app-auth.module';
import { AppSharedModule } from 'src/app/shared/app-shared.module';

import { APP_CORE_ROUTES } from './routes';

const APP_CORE_IMPORTS: AppImportsType = [
  AppSharedModule,
  RouterModule.forRoutes(APP_CORE_ROUTES),
  ConfigModule.forRoot(APP_CONFIGS),
  StatusMonitorModule.setUp(APP_STATUS_MONITOR_CONFIGS),
  TypeOrmModule.forRootAsync(APP_TYPEORM_CONFIGS),
  AppAuthModule,
  AppShopModule,
  AppMediaModule,
];

const APP_CORE_PROVIDERS: AppProvidersType = [...APP_CORE_INTERCEPTORS, ...APP_CORE_FILTERS];

@Module({
  imports: APP_CORE_IMPORTS,
  providers: APP_CORE_PROVIDERS,
})
export class AppCoreModule {}
