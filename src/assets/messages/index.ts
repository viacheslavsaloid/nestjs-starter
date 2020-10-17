import { typeDefenition } from 'src/app/shared/helpers/functions/app-type-defenition.function';

import { APP_LOGGER_MESSAGES } from 'src/assets/messages/app-logger.messages';
import { APP_SWAGGER_MESSAGES } from 'src/assets/messages/app-swagger.messages';
import { APP_MULTER_MESSAGES } from 'src/assets/messages/app-multer.messages ';
import { APP_BOOTSTRAP_MESSAGES } from 'src/assets/messages/app-bootstrap.messages';
import { APP_AUTH_MESSAGES } from 'src/assets/messages/app-auth.messages';

export const APP_MESSAGES = typeDefenition({
  BOOTSTRAP: APP_BOOTSTRAP_MESSAGES,
  LOGGER: APP_LOGGER_MESSAGES,
  SWAGGER: APP_SWAGGER_MESSAGES,
  MULTER: APP_MULTER_MESSAGES,
  AUTH: APP_AUTH_MESSAGES,
});
