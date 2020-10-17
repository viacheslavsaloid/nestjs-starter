import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusMonitorModule } from 'nest-status-monitor';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppMediaModule } from 'src/app/media/app-media.module';
import { AppImportsInterface, AppProvidersInterface } from 'src/app/shared/interfaces/helpers';

import { APP_CONFIG, APP_STATUS_MONITOR_CONFIG, APP_TYPEORM_CONFIG, APP_MAILER_CONFIG } from 'src/app/core/configs';

import { APP_CORE_INTERCEPTORS } from 'src/app/core/interceptors';
import { APP_CORE_FILTERS } from 'src/app/core/filters';

import { AppShopModule } from 'src/app/shop/app-shop.module';
import { AppAuthModule } from 'src/app/auth/app-auth.module';
import { AppSharedModule } from 'src/app/shared/app-shared.module';

import { APP_CORE_ROUTES } from 'src/app/core/routes';

const APP_CORE_IMPORTS: AppImportsInterface = [
  AppSharedModule,
  RouterModule.forRoutes(APP_CORE_ROUTES),
  ConfigModule.forRoot(APP_CONFIG),
  StatusMonitorModule.setUp(APP_STATUS_MONITOR_CONFIG),
  TypeOrmModule.forRootAsync(APP_TYPEORM_CONFIG),
  MailerModule.forRootAsync(APP_MAILER_CONFIG),
  AppAuthModule,
  AppShopModule,
  AppMediaModule,
];

const APP_CORE_PROVIDERS: AppProvidersInterface = [...APP_CORE_INTERCEPTORS, ...APP_CORE_FILTERS];

@Module({
  imports: APP_CORE_IMPORTS,
  providers: APP_CORE_PROVIDERS,
})
export class AppCoreModule {}
