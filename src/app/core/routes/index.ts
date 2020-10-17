import { Routes } from 'nest-router';

import { AppAuthModule } from 'src/app/auth/app-auth.module';
import { AppShopModule } from 'src/app/shop/app-shop.module';

const API_PATH = '/api';
const VERSION_PATH = '/v1';

const AUTH_PATH = '/auth';
const SHOP_PATH = '/shop';

export const APP_CORE_ROUTES: Routes = [
  {
    path: API_PATH,
    children: [
      {
        path: VERSION_PATH,
        children: [
          {
            path: AUTH_PATH,
            module: AppAuthModule,
          },
          {
            path: SHOP_PATH,
            module: AppShopModule,
          },
        ],
      },
    ],
  },
];
