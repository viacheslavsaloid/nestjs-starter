import { AppUserEntity } from 'src/app/auth/database';
import { AppJwtDto } from 'src/app/auth/dtos';
import { AppSwaggerEndpointsMapInterface } from 'src/app/shared/interfaces/swagger';
import { AppHttpErrorDto, AppHttpSuccessDto } from 'src/app/shared/dtos';

export const AppAuthSwaggerEndpoints: AppSwaggerEndpointsMapInterface = {
  CORE: { tag: 'Auth' },
  SIGN_IN: {
    ok: { type: AppHttpSuccessDto, description: 'Return JWT token in response' },
    unauthorized: { type: AppHttpErrorDto, description: 'Wrong Email or Password' },
  },
  SIGN_UP: { created: { type: AppJwtDto, description: 'Return JWT token in response' } },
  RESET_PASSWORD: { ok: { type: String, description: 'Return a link to reset' } },
  ME: { ok: { type: AppUserEntity, description: 'Return User' }, unauthorized: { description: 'Wrong Jwt token' } },
};
