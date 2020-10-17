import { AppControllersInterface } from 'src/app/shared/interfaces/helpers';
import { AppProductsController } from './products/app-products.controller';

export * from './products/app-products.controller';

export const APP_SHOP_CONTROLLERS: AppControllersInterface = [AppProductsController];
