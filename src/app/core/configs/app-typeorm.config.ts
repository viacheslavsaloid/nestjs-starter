import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Config for typeorm
 */
export const APP_TYPEORM_CONFIG: TypeOrmModuleAsyncOptions = {
  imports: [AppSharedModule],
  inject: [AppConfigService],
  useFactory: (appConfigService: AppConfigService): TypeOrmModuleOptions => ({
    type: appConfigService.get('TYPEORM_TYPE'),
    host: appConfigService.get('TYPEORM_HOST'),
    port: appConfigService.get('TYPEORM_PORT'),
    username: appConfigService.get('TYPEORM_USERNAME'),
    password: appConfigService.get('TYPEORM_PASSWORD'),
    database: appConfigService.get('TYPEORM_DATABASE'),
    synchronize: appConfigService.get('TYPEORM_SYNCHRONIZE'),
    keepConnectionAlive: appConfigService.get('TYPEORM_KEEP_CONNECTION_ALIVE'),
    autoLoadEntities: appConfigService.get('TYPEORM_AUTO_LOAD_ENTITIES'),
  }),
};
