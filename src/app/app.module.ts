import { Module } from '@nestjs/common';
import { AppCoreModule } from 'src/app/core/app-core.module';
import { AppImportsType } from 'src/app/shared/interfaces/utils';

const APP_IMPORTS: AppImportsType = [AppCoreModule];

@Module({
  imports: APP_IMPORTS,
})
export class AppModule {}
