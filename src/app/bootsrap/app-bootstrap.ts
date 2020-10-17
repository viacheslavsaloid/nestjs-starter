import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';
import { appPlugins } from 'src/app/bootsrap/plugins';
import { AppConfigService } from 'src/app/shared/services';

declare const module: any;

/**
 * @description Method, which create and run app in dev, prod or hmr (hot) mode
 */
export async function appBootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.get(AppConfigService);
  const port = appConfigService.get('PORT');

  appPlugins(app);

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  return app;
}
