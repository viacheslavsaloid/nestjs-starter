import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SHOP_SERVICES } from './services';
import { APP_SHOP_CONTROLLERS } from './controllers';
import { APP_SHOP_ENTETIES } from './database';
import { AppImportsType, AppProvidersType } from 'src/app/shared/interfaces/utils';
import { AppSharedModule } from 'src/app/shared/app-shared.module';

const APP_SHOP_IMPORTS: AppImportsType = [AppSharedModule, TypeOrmModule.forFeature([...APP_SHOP_ENTETIES])];
const APP_SHOP_PROVIDERS: AppProvidersType = [...SHOP_SERVICES];

@Module({
  imports: APP_SHOP_IMPORTS,
  controllers: APP_SHOP_CONTROLLERS,
  providers: APP_SHOP_PROVIDERS,
})
export class AppShopModule {}
