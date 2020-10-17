import { INestApplication } from '@nestjs/common';

/**
 * @description Method, which setup cors for application
 */
export function appCorsPlugin(app: INestApplication): void {
  app.enableCors();
}
