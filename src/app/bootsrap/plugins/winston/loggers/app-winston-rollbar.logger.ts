import { ConfigService } from '@nestjs/config';
import { appRollbar } from 'src/app/bootsrap/plugins/app-rollbar.plugin';
import { AppWinstonRollbarTransport } from 'src/app/bootsrap/plugins/winston/transports';

export function getAppWinstonRollbarLogger(configService: ConfigService) {
  return new AppWinstonRollbarTransport(appRollbar(configService));
}
