import { appRollbar } from 'src/app/bootsrap/plugins/app-rollbar.plugin';
import { AppWinstonRollbarTransport } from 'src/app/bootsrap/plugins/winston/transports';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Class to connect rollbar to winston.
 */
export function getAppWinstonRollbarLogger(appConfigService: AppConfigService): AppWinstonRollbarTransport {
  return new AppWinstonRollbarTransport(appRollbar(appConfigService));
}
