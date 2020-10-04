import { AppAuthModule } from 'src/app/auth/app-auth.module';
import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';
import { APP_MESSAGES } from 'src/assets/messages';

export const AppAuthSwaggerDoc: AppSwaggerDocInterface = {
  url: APP_MESSAGES.SWAGGER.AUTH.URL,
  title: APP_MESSAGES.SWAGGER.AUTH.TITLE,
  description: APP_MESSAGES.SWAGGER.AUTH.DESCRIPTION,
  module: AppAuthModule,
};
