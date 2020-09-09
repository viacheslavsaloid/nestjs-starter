import { INestApplication } from '@nestjs/common';

import { appCorsPlugin } from './app-cors.plugin';
import { appHelmetPlugin } from './app-helmet.plugin';
import { appCsurfPlugin } from './app-csurf.plugin';
import { appRateLimitPlugin } from './app-rate-limit.plugin';
import { ConfigService } from '@nestjs/config';
import { appSwagger } from './app-swagger.plugin';
import { appWinston } from './winston';

export function appPlugins(app: INestApplication) {
  const configService = app.get(ConfigService);
  const mode = configService.get('MODE');

  app.useLogger(appWinston(configService));

  if (mode === 'production') {
    appCorsPlugin(app);
    appHelmetPlugin(app);
    appCsurfPlugin(app);
    appRateLimitPlugin(app);
  }

  appSwagger(app);
}
