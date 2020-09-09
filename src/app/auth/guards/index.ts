import { AppRolesGuard } from './app-roles.guard';
import { AppJwtAuthGuard } from './app-jwt-auth.guard';
import { AppLocalAuthGuard } from './app-local-auth.guard';

export * from './app-roles.guard';
export * from './app-jwt-auth.guard';
export * from './app-local-auth.guard';

export const AUTH_GUARDS = [AppLocalAuthGuard, AppJwtAuthGuard, AppRolesGuard];
