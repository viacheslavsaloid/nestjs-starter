import { AppAuthModule } from 'src/app/auth/app-auth.module';
import { AppSwaggerDocInterface } from 'src/app/shared/interfaces/swagger';

export const AppAuthSwaggerDoc: AppSwaggerDocInterface = {
  url: 'auth',
  title: 'Auth Module',
  description: 'Auth Description',
  module: AppAuthModule,
};
