import { AppJwtAuthGuard, AppLocalAuthGuard } from 'src/app/auth/guards';
import { AppEndpointsMapInterface } from 'src/app/shared/interfaces/utils';

export const AppAuthEndpoints: AppEndpointsMapInterface = {
  SIGN_IN: { method: { type: 'post', url: 'sign_in' }, guards: AppLocalAuthGuard },
  SIGN_UP: { method: { type: 'post', url: 'sign_up' }, code: { statusCode: 201 } },
  RESET_PASSWORD: { method: { type: 'post', url: 'reset_password' } },
  ME: { method: { url: 'me' }, guards: AppJwtAuthGuard },
};
