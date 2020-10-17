import { AppEnvEnum } from 'src/app/shared/interfaces/helpers';

export interface AppConfigVariablesInterface {
  MODE: AppEnvEnum;
  PORT: string;
  HOST: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  API_PATH: string;
  API_VERSION: number;
  MAILER_TRANSPORT: string;
  ROLLBAR_ACCESS_TOKEN: string;
  TYPEORM_TYPE: 'mysql';
  TYPEORM_HOST: string;
  TYPEORM_PORT: string;
  TYPEORM_USERNAME: string;
  TYPEORM_PASSWORD: string;
  TYPEORM_DATABASE: string;
  TYPEORM_SYNCHRONIZE: boolean;
  TYPEORM_KEEP_CONNECTION_ALIVE: boolean;
  TYPEORM_AUTO_LOAD_ENTITIES: boolean;
  LOGS_FOLDER: string;
  MEDIA_FOLDER: string;
  MAIL_FOLDER: string;
  LOG_IN_CONSOLE: boolean;
  LOG_ERRORS_IN_FILE: boolean;
  LOG_COMBINED_IN_FILE: boolean;
  LOG_ERRORS_IN_ROLLBAR: boolean;
  SEND_FULL_ERROR_TO_CLIENT: boolean;
}
