import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';
import { AppShopModule } from 'src/app/shop/app-shop.module';
import { APP_MESSAGES } from 'src/assets/messages';

export const AppShopSwaggerDoc: AppSwaggerDocInterface = {
  url: APP_MESSAGES.SWAGGER.SHOP.URL,
  title: APP_MESSAGES.SWAGGER.SHOP.TITLE,
  description: APP_MESSAGES.SWAGGER.SHOP.DESCRIPTION,
  module: AppShopModule,
  auth: 'bearer',
};
