import { AppSwaggerEndpointsMapInterface } from 'src/app/shared/interfaces/swagger';
import { APP_MESSAGES } from 'src/assets/messages';

export const AppMediaSwaggerEndpoints: AppSwaggerEndpointsMapInterface = {
  CORE: { tag: APP_MESSAGES.SWAGGER.MEDIA.TAG },
  UPLOAD_FILE: {
    ok: { type: '', description: APP_MESSAGES.SWAGGER.MEDIA.UPLOAD_FILE_OK },
  },
  UPLOAD_FILES: {
    ok: { type: '', description: APP_MESSAGES.SWAGGER.MEDIA.UPLOAD_FILES_OK },
  },
  GET_FILE: { ok: { type: '', description: APP_MESSAGES.SWAGGER.MEDIA.GET_FILE_OK } },
};
