import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AppAuthServiceCreateUserArgsInterface,
  AppAuthServiceCreateUserResponseInterface,
  AppAuthServiceCreateUserWithRandomPasswordArgsInterface,
  AppAuthServiceCreateUserWithRandomPasswordResponseInterface,
  AppAuthServiceResetPasswordArgsInterface,
  AppAuthServiceResetPasswordResponseInterface,
  AppAuthServiceSignInArgsInterface,
  AppAuthServiceSignInResponseInterface,
  AppAuthServiceSignUpArgsInterface,
  AppAuthServiceSignUpResponseInterface,
} from 'src/app/auth/interfaces/services';
import { AppUserEntity } from 'src/app/auth/database';
import { AppMailerService, AppHelperService } from 'src/app/shared/services';
// Circular Dependency
import { AppJwtService } from 'src/app/auth/services/jwt/app-jwt.service';
import { APP_MESSAGES } from 'src/assets/messages';

/**
 * @description Sevice for auth
 */
@Injectable()
export class AppAuthService {
  constructor(
    @InjectRepository(AppUserEntity) private readonly _appUsersRepository: Repository<AppUserEntity>,
    private readonly _appJwtService: AppJwtService,
    private readonly _appMailerService: AppMailerService,
    private readonly _appHelperService: AppHelperService,
  ) {}

  /**
   * @description Method to return user from repository
   */
  public async getUser(args) {
    const { email, password } = args;
    const existedUser = await this._appUsersRepository.findOne({ where: { email } });

    if (!existedUser) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.INVALID_EMAIL);
    }

    if (!existedUser.password !== password) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.INVALID_PASSWORD);
    }

    return existedUser;
  }

  /**
   * @description Check, if email and password valid and then return user's token
   */
  public async signIn(args: AppAuthServiceSignInArgsInterface): AppAuthServiceSignInResponseInterface {
    const existedUser = await this.getUser(args);
    const payload = this._appHelperService.parseObject<AppUserEntity>({ object: existedUser, exclude: ['password'] });

    return this._appJwtService.generateJwtToken({ payload });
  }

  /**
   * @description Check, if email doesn't exist and then create new user with custom passowrd or auto generated
   */
  public async signUp(args: AppAuthServiceSignUpArgsInterface): AppAuthServiceSignUpResponseInterface {
    const { email, password } = args;
    const existedUser = await this._appUsersRepository.findOne({ where: { email } });

    if (existedUser) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.EMAIL_EXIST);
    }

    const createType = password ? 'createUser' : 'createUserWithRandomPassword';
    const createdUser = await {
      createUser: this.createUser,
      createUserWithRandomPassword: this.createUserWithRandomPassword,
    }[createType](args);
    const payload = this._appHelperService.parseObject({ object: createdUser, exclude: ['password'] });

    return this._appJwtService.generateJwtToken({ payload });
  }

  /**
   * @description check, if email exist and then send a mail with passowrd to user's email
   */
  public async resetPassword(
    args: AppAuthServiceResetPasswordArgsInterface,
  ): AppAuthServiceResetPasswordResponseInterface {
    const { email } = args;
    const existedUser = await this._appUsersRepository.findOne({ where: { email } });

    if (!existedUser) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.INVALID_EMAIL);
    }

    await this._appMailerService.sendMail({
      templateKey: 'MAIL_CONFIRMATION',
      templateData: {
        password: existedUser.password,
      },
      from: existedUser.email,
    });
  }

  /**
   * @description Create new user with random password and sent it to his email
   */
  private async createUserWithRandomPassword(
    args: AppAuthServiceCreateUserWithRandomPasswordArgsInterface,
  ): AppAuthServiceCreateUserWithRandomPasswordResponseInterface {
    const { email } = args;
    const password = this._appHelperService.generateRandomPassword();
    const createdUser = await this._appUsersRepository.create({ email, password });

    await this._appMailerService.sendMail({
      templateKey: 'MAIL_CONFIRMATION',
      templateData: {
        password: createdUser.password,
      },
      from: createdUser.email,
    });

    return createdUser;
  }

  /**
   * @description Create new user with email and password
   */
  private async createUser(args: AppAuthServiceCreateUserArgsInterface): AppAuthServiceCreateUserResponseInterface {
    const { email, password } = args;

    return this._appUsersRepository.create({ email, password });
  }
}
