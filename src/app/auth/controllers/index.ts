import { AppControllersInterface } from 'src/app/shared/interfaces/helpers';

import { AppAuthController } from 'src/app/auth/controllers/auth/app-auth.controller';

export { AppAuthController } from 'src/app/auth/controllers/auth/app-auth.controller';

export const APP_AUTH_CONTROLLERS: AppControllersInterface = [AppAuthController];
