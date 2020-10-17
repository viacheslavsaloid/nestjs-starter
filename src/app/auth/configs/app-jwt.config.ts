import { JwtModuleOptions } from '@nestjs/jwt';
import { AppConfigService } from 'src/app/shared/services';
import { AppSharedModule } from 'src/app/shared/app-shared.module';

/**
 * @description Config for nestjs/jwt library
 */
export const APP_JWT_CONFIG = {
  imports: [AppSharedModule],
  inject: [AppConfigService],
  useFactory: (appConfigService: AppConfigService): JwtModuleOptions => ({
    secret: appConfigService.get('JWT_SECRET'),
    signOptions: { expiresIn: appConfigService.get('JWT_EXPIRES_IN') },
  }),
};
