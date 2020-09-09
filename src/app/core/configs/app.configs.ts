import { ConfigModule } from '@nestjs/config';

const fileDirectory = `src/environments/`;
const fileName = `environment${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`;
const fileType = `.env`;

const envFilePath = `${fileDirectory}${fileName}${fileType}`;

export const APP_CONFIGS: ConfigModule = {
  isGlobal: true,
  envFilePath,
};
