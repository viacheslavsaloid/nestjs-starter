import { AppMediaModule } from 'src/app/media/app-media.module';
import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';
import { APP_MESSAGES } from 'src/assets/messages';

export const AppMediaSwaggerDoc: AppSwaggerDocInterface = {
  url: APP_MESSAGES.SWAGGER.MEDIA.URL,
  title: APP_MESSAGES.SWAGGER.MEDIA.TITLE,
  description: APP_MESSAGES.SWAGGER.MEDIA.DESCRIPTION,
  module: AppMediaModule,
};
