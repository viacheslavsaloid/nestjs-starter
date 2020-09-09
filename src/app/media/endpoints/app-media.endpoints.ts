import { AppLocalAuthGuard } from 'src/app/auth/guards';
import { AppEndpointsMapInterface } from 'src/app/shared/interfaces/utils';

export const AppMediaEndpoints: AppEndpointsMapInterface = {
  UPLOAD_FILE: { method: { type: 'post', url: '' }, guards: AppLocalAuthGuard },
  UPLOAD_FILES: { method: { type: 'post', url: 'bulk' }, code: { statusCode: 201 } },
  GET_FILE: { method: { type: 'get', url: ':id' } },
};
