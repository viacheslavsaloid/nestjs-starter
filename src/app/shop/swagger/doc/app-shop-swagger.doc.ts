import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';
import { AppShopModule } from 'src/app/shop/app-shop.module';

export const AppShopSwaggerDoc: AppSwaggerDocInterface = {
  url: 'shop',
  title: 'Shop Module',
  description: 'Shop Description',
  module: AppShopModule,
  auth: 'bearer',
};
