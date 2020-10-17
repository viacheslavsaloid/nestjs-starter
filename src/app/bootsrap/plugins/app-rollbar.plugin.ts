import Rollbar from 'rollbar';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Method, which setup rollbar for application
 */
export function appRollbar(appConfigService: AppConfigService): Rollbar {
  const accessToken = appConfigService.get('ROLLBAR_ACCESS_TOKEN');
  const mode = appConfigService.get('MODE');

  return new Rollbar({
    accessToken,
    environment: mode,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
}
