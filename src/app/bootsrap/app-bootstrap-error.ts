import { APP_MESSAGES } from 'src/assets/messages';
import { APP_REPLACE_KEY } from 'src/app/shared/helpers/variables';

/**
 * @description Method, which log, if app failed
 */
export function appBootstrapError(err: string): void {
  console.error(APP_MESSAGES.BOOTSTRAP.ERROR.replace(APP_REPLACE_KEY, err));
}
