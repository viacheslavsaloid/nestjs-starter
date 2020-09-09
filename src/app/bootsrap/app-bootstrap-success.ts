import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function appBootstrapSuccess(app: INestApplication) {
  const configService = app.get(ConfigService);

  const mode = configService.get('MODE');
  const host = configService.get('HOST');
  const port = configService.get('PORT');

  const url = `${host}:${port}/`;

  console.log(`App in ${mode} mode opened on: ${url}`);
  console.log(`Swagger opened on ${url}swagger/`);
  console.log(`Monitoring Page opened on ${url}status/`);
}
