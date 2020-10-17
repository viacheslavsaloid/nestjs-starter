import { INestApplication } from '@nestjs/common';
import rateLimit from 'express-rate-limit';

/**
 * @description Method, which setup rate limits for application
 */
export function appRateLimitPlugin(app: INestApplication): void {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
}
