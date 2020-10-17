import { INestApplication } from '@nestjs/common';
import { APP_MESSAGES } from 'src/assets/messages';
import { APP_REPLACE_KEY, APP_REPLACE_KEY_1, APP_REPLACE_KEY_2 } from 'src/app/shared/helpers/variables';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Method, which log, if app runs success
 */
export function appBootstrapSuccess(app: INestApplication): void {
  const appConfigService = app.get(AppConfigService);

  const mode = appConfigService.get('MODE');
  const host = appConfigService.get('HOST');
  const port = appConfigService.get('PORT');

  const url = `${host}:${port}/`;

  console.log(APP_MESSAGES.BOOTSTRAP.APP_OPENED.replace(APP_REPLACE_KEY_1, mode).replace(APP_REPLACE_KEY_2, url));
  console.log(APP_MESSAGES.BOOTSTRAP.SWAGGER_OPENED.replace(APP_REPLACE_KEY, url));
  console.log(APP_MESSAGES.BOOTSTRAP.MONITORING_PAGE_OPENED.replace(APP_REPLACE_KEY, url));
}
