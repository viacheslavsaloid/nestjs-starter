import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvEnum } from 'src/app/shared/interfaces/helpers';
import { AppConfigVariablesInterface } from 'src/app/shared/interfaces/services';

@Injectable()
export class AppConfigService {
  constructor(private readonly _configService: ConfigService<AppConfigVariablesInterface>) {}

  public get isProd() {
    return this._configService.get('MODE') === AppEnvEnum.PROD;
  }

  public get isDev() {
    return this._configService.get('MODE') === AppEnvEnum.DEV || AppEnvEnum.HMR;
  }

  public get(key: keyof AppConfigVariablesInterface) {
    return this._configService.get(key);
  }
}
