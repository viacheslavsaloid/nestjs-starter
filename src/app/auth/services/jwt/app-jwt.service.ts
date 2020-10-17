import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GenerateJwtTokenArgsInterface, GenerateJwtTokenResponseInterface } from 'src/app/auth/interfaces/services';

/**
 * @description Sevice for all JWT operations
 */
@Injectable()
export class AppJwtService {
  constructor(private readonly _jwtService: JwtService) {}

  /**
   * @description method to sign token
   */
  public generateJwtToken(args: GenerateJwtTokenArgsInterface): GenerateJwtTokenResponseInterface {
    const { payload } = args;

    const token = this._jwtService.sign(payload);

    return { token };
  }
}
