import { AppControllersType } from 'src/app/shared/interfaces/utils';
import { AppProductsController } from './products/app-products.controller';

export * from './products/app-products.controller';

export const APP_SHOP_CONTROLLERS: AppControllersType = [AppProductsController];
