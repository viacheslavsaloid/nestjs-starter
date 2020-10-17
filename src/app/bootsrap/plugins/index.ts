import { INestApplication } from '@nestjs/common';

import { appCorsPlugin } from './app-cors.plugin';
import { appHelmetPlugin } from './app-helmet.plugin';
import { appCsurfPlugin } from './app-csurf.plugin';
import { appRateLimitPlugin } from './app-rate-limit.plugin';
import { appSwagger } from './app-swagger.plugin';
import { appWinston } from './winston';
import { AppConfigService } from 'src/app/shared/services';

export function appPlugins(app: INestApplication) {
  const appConfigService = app.get(AppConfigService);

  app.useLogger(appWinston(appConfigService));

  if (appConfigService.isProd) {
    appCorsPlugin(app);
    appHelmetPlugin(app);
    appCsurfPlugin(app);
    appRateLimitPlugin(app);
  }

  appSwagger(app);
}
