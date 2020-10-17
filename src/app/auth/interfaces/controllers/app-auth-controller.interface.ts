import { AppUserEntity } from 'src/app/auth/database';
import { AppJwtDto } from 'src/app/auth/dtos';

export type AppAuthControllerSignInArgsInterface = Pick<AppUserEntity, 'email' | 'password'>;

export type AppAuthControllerSignInResponseInterface = Promise<AppJwtDto>;

export type AppAuthControllerSignUpArgsInterface = Pick<AppUserEntity, 'email' | 'password'>;

export type AppAuthControllerSignUpResponseInterface = Promise<AppJwtDto>;

export type AppAuthControllerResetPasswordArgsInterface = Pick<AppUserEntity, 'email'>;

export type AppAuthControllerResetPasswordResponseInterface = Promise<void>;

export type AppAuthControllerMeArgsInterface = AppUserEntity;

export type AppAuthControllerMeResponseInterface = AppUserEntity;
