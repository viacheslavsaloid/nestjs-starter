import { ConfigService } from '@nestjs/config';
import { AppEnvEnum } from 'src/app/shared/interfaces/utils';
import Rollbar from 'rollbar';

export function appRollbar(configService: ConfigService): Rollbar {
  const accessToken = configService.get<string>('ROLLBAR_ACCESS_TOKEN');
  const mode = configService.get<AppEnvEnum>('MODE');

  return new Rollbar({
    accessToken,
    environment: mode,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
}
