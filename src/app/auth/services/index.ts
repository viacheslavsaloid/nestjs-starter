import { AppJwtService } from 'src/app/auth/services/jwt/app-jwt.service';
import { AppAuthService } from 'src/app/auth/services/auth/app-auth.service';

export { AppJwtService } from 'src/app/auth/services/jwt/app-jwt.service';
export { AppAuthService } from 'src/app/auth/services/auth/app-auth.service';

export const APP_AUTH_SERVICES = [AppAuthService, AppJwtService];
