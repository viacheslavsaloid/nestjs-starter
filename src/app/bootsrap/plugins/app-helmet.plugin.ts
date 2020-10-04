import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

export function appHelmetPlugin(app: INestApplication): void {
  app.use(helmet());
}
