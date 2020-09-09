import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SHOP_SERVICES } from './services';
import { APP_SHOP_CONTROLLERS } from './controllers';
import { APP_SHOP_ENTETIES } from './database';

const APP_SHOP_IMPORTS = [TypeOrmModule.forFeature([...APP_SHOP_ENTETIES])];
const APP_SHOP_PROVIDERS = [...SHOP_SERVICES];

@Module({
  imports: APP_SHOP_IMPORTS,
  controllers: APP_SHOP_CONTROLLERS,
  providers: APP_SHOP_PROVIDERS,
})
export class AppShopModule {}
