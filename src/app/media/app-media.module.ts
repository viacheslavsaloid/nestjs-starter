import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { APP_MEDIA_MULTER_CONFIG } from 'src/app/media/configs/multer.config';
import { APP_MEDIA_CONTROLLERS } from 'src/app/media/controllers';

const APP_MEDIA_IMPORTS = [MulterModule.registerAsync(APP_MEDIA_MULTER_CONFIG)];

@Module({
  controllers: APP_MEDIA_CONTROLLERS,
  imports: APP_MEDIA_IMPORTS,
})
export class AppMediaModule {}
