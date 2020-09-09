import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { AppErrorDto } from 'src/app/shared/dtos';
import { AppSwaggerDecoratorsMapInterface, AppSwaggerEndpointInterface } from 'src/app/shared/interfaces/swagger';

const APP_SWAGGER_DECORATORS_MAP: AppSwaggerDecoratorsMapInterface = {
  tag: ApiTags,
  created: ApiCreatedResponse,
  ok: ApiOkResponse,
  auth: () => ApiBearerAuth(),
  unauthorized: args => {
    const { type = AppErrorDto, ...rest } = args;
    return ApiUnauthorizedResponse({ type, ...rest });
  },
};

export function AppSwaggerDecorator(args: AppSwaggerEndpointInterface) {
  const decoratorsToApply = Object.keys(args)
    .filter(key => key)
    .map(key => APP_SWAGGER_DECORATORS_MAP[key](args[key]));

  return applyDecorators(...decoratorsToApply);
}
