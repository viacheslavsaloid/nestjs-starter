import { Module } from '@nestjs/common';
import { APP_SHARED_SERVICES } from 'src/app/shared/services';
import { AppExportsInterface, AppProvidersInterface } from 'src/app/shared/interfaces/helpers';

const APP_SHARED_PROVIDERS: AppProvidersInterface = [...APP_SHARED_SERVICES];
const APP_SHARED_EXPORTS: AppExportsInterface = [...APP_SHARED_SERVICES];

@Module({
  providers: APP_SHARED_PROVIDERS,
  exports: APP_SHARED_EXPORTS,
})
export class AppSharedModule {}
