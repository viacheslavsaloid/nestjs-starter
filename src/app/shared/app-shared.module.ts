import { Module } from '@nestjs/common';
import { APP_SHARED_SERVICES } from 'src/app/shared/services';
import { AppExportsType, AppProvidersType } from 'src/app/shared/interfaces/utils';

const APP_SHARED_PROVIDERS: AppProvidersType = [...APP_SHARED_SERVICES];
const APP_SHARED_EXPORTS: AppExportsType = [...APP_SHARED_PROVIDERS];

@Module({
  providers: APP_SHARED_PROVIDERS,
  exports: APP_SHARED_EXPORTS,
})
export class AppSharedModule {}
