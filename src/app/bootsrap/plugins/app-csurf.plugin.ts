import { INestApplication } from '@nestjs/common';
import csurf from 'csurf';

export function appCsurfPlugin(app: INestApplication) {
  app.use(csurf());
}
