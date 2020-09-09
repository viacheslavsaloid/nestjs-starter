import { AppSwaggerEndpointsMapInterface } from 'src/app/shared/interfaces/swagger';

export const AppMediaSwaggerEndpoints: AppSwaggerEndpointsMapInterface = {
  CORE: { tag: 'Files' },
  UPLOAD_FILE: {
    ok: { type: '', description: 'Return path' },
  },
  UPLOAD_FILES: {
    ok: { type: '', description: 'Return array of paths' },
  },
  GET_FILE: { ok: { type: '', description: 'Return File' } },
};
