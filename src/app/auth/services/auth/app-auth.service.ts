import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AppUserEntity } from '../../database';
import { AppJwtDto } from '../../dtos';

@Injectable()
export class AppAuthService {
  constructor(
    @InjectRepository(AppUserEntity)
    private usersRepository: Repository<AppUserEntity>,
    private _jwtService: JwtService,
  ) {}

  public getUser = (username: string): Promise<AppUserEntity> => this.validate('username', username);

  public validate = (field: 'username' | 'password', value: string): Promise<AppUserEntity> =>
    this.usersRepository.findOne({ where: { [field]: value } });

  public signIn(user: AppUserEntity): AppJwtDto {
    const payload = { ...user };

    delete payload.password;

    const token = this._jwtService.sign(payload);

    return { token };
  }

  public async signUp(user: AppUserEntity): Promise<AppJwtDto> {
    const { username } = user;

    const isUsernameExist = await this.validate('username', username);

    if (isUsernameExist) {
      throw new UnauthorizedException(null, 'Email Already Exist');
    }

    this.usersRepository.insert(user);

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
