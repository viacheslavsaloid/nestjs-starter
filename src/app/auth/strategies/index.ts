import { AppJwtStrategy } from './app-jwt.strategy';
import { AppLocalStrategy } from './app-local.strategy';

export { AppJwtStrategy } from './app-jwt.strategy';
export { AppLocalStrategy } from './app-local.strategy';

export const APP_AUTH_STRATEGIES = [AppLocalStrategy, AppJwtStrategy];
