import { typeDefenition } from 'src/app/shared/helpers/functions/app-type-defenition.function';
import { APP_REPLACE_KEY, APP_REPLACE_KEY_1, APP_REPLACE_KEY_2 } from 'src/app/shared/helpers/variables';

export const APP_BOOTSTRAP_MESSAGES = typeDefenition({
  ERROR: `App failed: ${APP_REPLACE_KEY}`,
  APP_OPENED: `App in ${APP_REPLACE_KEY_1} mode opened on: ${APP_REPLACE_KEY_2}`,
  SWAGGER_OPENED: `Swagger opened on  ${APP_REPLACE_KEY} swagger/`,
  MONITORING_PAGE_OPENED: `Monitoring Page opened on ${APP_REPLACE_KEY} status/`,
});
