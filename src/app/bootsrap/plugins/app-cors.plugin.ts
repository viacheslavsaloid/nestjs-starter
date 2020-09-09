import { INestApplication } from '@nestjs/common';

export function appCorsPlugin(app: INestApplication) {
  app.enableCors();
}
