import { ConfigModule } from '@nestjs/config';

const fileDirectory = `src/environments/`;
const fileName = `environment.${process.env.NODE_ENV}`;
const fileType = `.env`;

const envFilePath = `${fileDirectory}${fileName}${fileType}`;

export const APP_CONFIG: ConfigModule = {
  isGlobal: true,
  envFilePath,
};
