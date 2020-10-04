import { typeDefenition } from 'src/assets/messages/app-type-defenition';
import { APP_REPLACE_KEY } from 'src/app/shared/utils';

export const APP_LOGGER_MESSAGES = typeDefenition({
  INTERCEPTOR: {
    OUT: `Interceptor out: ${APP_REPLACE_KEY}`,
    IN: `Interceptor in: ${APP_REPLACE_KEY}`,
  },
  FUNCTION: {
    OUT: `Function Out: ${APP_REPLACE_KEY}`,
    IN: `Function In: ${APP_REPLACE_KEY}`,
  },
});
