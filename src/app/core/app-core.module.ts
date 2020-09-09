import { Logger, Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusMonitorModule } from 'nest-status-monitor';
import { APP_CORE_INTERCEPTORS } from 'src/app/core/interceptors';
import { AppMediaModule } from 'src/app/media/app-media.module';

import { APP_CONFIGS, APP_STATUS_MONITOR_CONFIGS, APP_TYPEORM_CONFIGS } from './configs';

import { AppShopModule } from 'src/app/shop/app-shop.module';
import { AppAuthModule } from 'src/app/auth/app-auth.module';

import { APP_CORE_ROUTES } from './routes';

const APP_CORE_IMPORTS = [
  RouterModule.forRoutes(APP_CORE_ROUTES),
  ConfigModule.forRoot(APP_CONFIGS),
  StatusMonitorModule.setUp(APP_STATUS_MONITOR_CONFIGS),
  TypeOrmModule.forRootAsync(APP_TYPEORM_CONFIGS),
  AppAuthModule,
  AppShopModule,
  AppMediaModule,
];

const APP_CORE_PROVIDERS = [...APP_CORE_INTERCEPTORS, Logger];

@Module({
  imports: APP_CORE_IMPORTS,
  providers: APP_CORE_PROVIDERS,
})
export class AppCoreModule {}
