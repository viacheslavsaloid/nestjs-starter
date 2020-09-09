import { AppUserEntity } from 'src/app/auth/database';
import { AppJwtDto } from 'src/app/auth/dtos';
import { AppSwaggerEndpointsMapInterface } from 'src/app/shared/interfaces/swagger';

export const AppAuthSwaggerEndpoints: AppSwaggerEndpointsMapInterface = {
  CORE: { tag: 'Auth' },
  SIGN_IN: {
    ok: { type: AppJwtDto, description: 'Return JWT token in response' },
    unauthorized: { description: 'Wrong Email or Password' },
  },
  SIGN_UP: { created: { type: AppJwtDto, description: 'Return JWT token in response' } },
  RESET_PASSWORD: { ok: { type: String, description: 'Return a link to reset' } },
  ME: { ok: { type: AppUserEntity, description: 'Return User' }, unauthorized: { description: 'Wrong Jwt token' } },
};
