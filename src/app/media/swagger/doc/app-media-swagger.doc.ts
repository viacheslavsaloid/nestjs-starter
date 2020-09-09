import { AppMediaModule } from 'src/app/media/app-media.module';
import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';

export const AppMediaSwaggerDoc: AppSwaggerDocInterface = {
  url: 'media',
  title: 'Media Module',
  description: 'Media Description',
  module: AppMediaModule,
};
