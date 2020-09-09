import { AppJwtStrategy } from './app-jwt.strategy';
import { AppLocalStrategy } from './app-local.strategy';

export * from './app-jwt.strategy';
export * from './app-local.strategy';

export const APP_AUTH_STRATEGIES = [AppLocalStrategy, AppJwtStrategy];
