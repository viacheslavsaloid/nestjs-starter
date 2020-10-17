import { Module } from '@nestjs/common';
import { AppCoreModule } from 'src/app/core/app-core.module';
import { AppImportsInterface } from 'src/app/shared/interfaces/helpers';

const APP_IMPORTS: AppImportsInterface = [AppCoreModule];

@Module({
  imports: APP_IMPORTS,
})
export class AppModule {}
