import { AppAuthController } from 'src/app/auth/controllers/auth/auth.controller';
import { AppControllersType } from 'src/app/shared/interfaces/utils';

export * from 'src/app/auth/controllers/auth/auth.controller';

export const APP_AUTH_CONTROLLERS: AppControllersType = [AppAuthController];
