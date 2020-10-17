import { typeDefenition } from 'src/app/shared/helpers/functions/app-type-defenition.function';
import { APP_REPLACE_KEY } from 'src/app/shared/helpers/variables';

export const APP_LOGGER_MESSAGES = typeDefenition({
  INTERCEPTOR_OUT: `Interceptor out: ${APP_REPLACE_KEY}`,
  INTERCEPTOR_IN: `Interceptor in: ${APP_REPLACE_KEY}`,
  FUNCTION_OUT: `Function out: ${APP_REPLACE_KEY}`,
  FUNCTION_IN: `Function in: ${APP_REPLACE_KEY}`,
});
