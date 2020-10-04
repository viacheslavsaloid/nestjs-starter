import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_MESSAGES } from 'src/assets/messages';
import { APP_REPLACE_KEY, APP_REPLACE_KEY_1, APP_REPLACE_KEY_2 } from 'src/app/shared/utils';

export function appBootstrapSuccess(app: INestApplication): void {
  const configService = app.get(ConfigService);

  const mode = configService.get('MODE');
  const host = configService.get('HOST');
  const port = configService.get('PORT');

  const url = `${host}:${port}/`;

  console.log(APP_MESSAGES.BOOTSTRAP.APP_OPENED.replace(APP_REPLACE_KEY_1, mode).replace(APP_REPLACE_KEY_2, url));
  console.log(APP_MESSAGES.BOOTSTRAP.SWAGGER_OPENED.replace(APP_REPLACE_KEY, url));
  console.log(APP_MESSAGES.BOOTSTRAP.MONITORING_PAGE_OPENED.replace(APP_REPLACE_KEY, url));
}
