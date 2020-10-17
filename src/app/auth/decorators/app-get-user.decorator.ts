import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AppUserEntity } from 'src/app/auth/database';

/**
 * @description Decorator to get user from the request
 */
export const AppGetUserDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AppUserEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
