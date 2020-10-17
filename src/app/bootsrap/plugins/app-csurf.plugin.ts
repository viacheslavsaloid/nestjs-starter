import { INestApplication } from '@nestjs/common';
import csurf from 'csurf';

/**
 * @description Method, which setup csurf for application
 */
export function appCsurfPlugin(app: INestApplication): void {
  app.use(csurf());
}
