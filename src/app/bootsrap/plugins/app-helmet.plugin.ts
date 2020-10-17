import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

/**
 * @description Method, which setup helmet for application
 */
export function appHelmetPlugin(app: INestApplication): void {
  app.use(helmet());
}
