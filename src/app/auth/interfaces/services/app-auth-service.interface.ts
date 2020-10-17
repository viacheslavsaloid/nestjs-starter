import { AppUserEntity } from 'src/app/auth/database';
import { AppJwtDto } from 'src/app/auth/dtos';

export type AppAuthServiceSignUpArgsInterface = Pick<AppUserEntity, 'email' | 'password'>;

export type AppAuthServiceSignUpResponseInterface = Promise<AppJwtDto>;

export type AppAuthServiceSignInArgsInterface = Pick<AppUserEntity, 'email' | 'password'>;

export type AppAuthServiceSignInResponseInterface = Promise<AppJwtDto>;

export type AppAuthServiceResetPasswordArgsInterface = Pick<AppUserEntity, 'email'>;

export type AppAuthServiceResetPasswordResponseInterface = Promise<void>;

export type AppAuthServiceCreateUserWithRandomPasswordArgsInterface = Pick<AppUserEntity, 'email'>;

export type AppAuthServiceCreateUserWithRandomPasswordResponseInterface = Promise<AppUserEntity>;

export type AppAuthServiceCreateUserArgsInterface = Pick<AppUserEntity, 'email' | 'password'>;

export type AppAuthServiceCreateUserResponseInterface = Promise<AppUserEntity>;
