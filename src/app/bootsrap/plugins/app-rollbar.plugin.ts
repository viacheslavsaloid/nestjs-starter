import { ConfigService } from '@nestjs/config';
import Rollbar from 'rollbar';

export function appRollbar(configService: ConfigService) {
  const accessToken = configService.get('ROLLBAR_ACCESS_TOKEN');
  const mode = configService.get('MODE');

  return new Rollbar({
    accessToken,
    environment: mode,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
}
