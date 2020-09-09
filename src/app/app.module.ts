import { Module } from '@nestjs/common';
import { AppCoreModule } from 'src/app/core/app-core.module';

@Module({
  imports: [AppCoreModule],
})
export class AppModule {}
