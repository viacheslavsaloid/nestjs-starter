import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { AppSwaggerDecoratorsMapInterface, AppSwaggerEndpointInterface } from 'src/app/shared/interfaces/swagger';
import { AppHttpErrorDto } from 'src/app/shared/dtos/http';

const APP_SWAGGER_DECORATORS_MAP: AppSwaggerDecoratorsMapInterface = {
  tag: ApiTags,
  created: ApiCreatedResponse,
  ok: ApiOkResponse,
  auth: () => ApiBearerAuth(),
  unauthorized: args => {
    const { type = AppHttpErrorDto, ...rest } = args;
    return ApiUnauthorizedResponse({ type, ...rest });
  },
};

/**
 * @description Decorator to easy work with swagger decorators
 */
export function AppSwaggerDecorator(args: AppSwaggerEndpointInterface) {
  const decoratorsToApply = Object.keys(args)
    .filter(key => key)
    .map(key => APP_SWAGGER_DECORATORS_MAP[key](args[key]));

  return applyDecorators(...decoratorsToApply);
}
