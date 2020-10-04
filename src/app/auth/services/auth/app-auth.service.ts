import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ValidateArgsInterface } from 'src/app/auth/interfaces';
import { AppUserEntity } from 'src/app/auth/database';
import { AppJwtDto } from 'src/app/auth/dtos';
import { APP_MESSAGES } from 'src/assets/messages';

@Injectable()
export class AppAuthService {
  constructor(
    @InjectRepository(AppUserEntity)
    private readonly appUsersRepository: Repository<AppUserEntity>,
    private readonly _jwtService: JwtService,
  ) {}

  public getUser(username: string): Promise<AppUserEntity> {
    return this.validate({
      field: 'username',
      value: username,
    });
  }

  public validate(args: ValidateArgsInterface): Promise<AppUserEntity> {
    const { field, value } = args;

    return this.appUsersRepository.findOne({ where: { [field]: value } });
  }

  public signIn(user: AppUserEntity): AppJwtDto {
    const payload = { ...user };

    delete payload.password;

    const token = this._jwtService.sign(payload);

    return { token };
  }

  public async signUp(user: AppUserEntity): Promise<AppJwtDto> {
    const { username } = user;
    const isUsernameExist = await this.validate({
      field: 'username',
      value: username,
    });

    if (isUsernameExist) {
      throw new UnauthorizedException(null, APP_MESSAGES.AUTH.ERRORS.EMAIL_EXIST);
    }

    await this.appUsersRepository.insert(user);

    return this.generateToken(user);
  }

  public generateToken(user: AppUserEntity) {
    const payload = { ...user };

    delete payload.password;

    const token = this._jwtService.sign(payload);

    return { token };
  }

  public resetPassword(user: AppUserEntity): string {
    const { username, password } = user;

    return username + password;
  }
}
