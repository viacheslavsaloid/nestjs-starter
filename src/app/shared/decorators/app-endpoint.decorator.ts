import { applyDecorators, Delete, Get, HttpCode, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AppEndpointInterface, AppEndpointMethodsMapInterface } from 'src/app/shared/interfaces/utils';

const APP_ENDPOINT_METHODS_MAP: AppEndpointMethodsMapInterface = {
  get: Get,
  post: Post,
  delete: Delete,
  patch: Patch,
  put: Put,
};

const APP_ENDPOINT_ARGS_MAP = {
  method: args => {
    const { type = 'get', url = '' } = args;
    return APP_ENDPOINT_METHODS_MAP[type](url);
  },
  code: args => {
    const { statusCode = 200 } = args;
    return HttpCode(statusCode);
  },
  guards: UseGuards,
};

export const AppEndpointDecorator = (args: AppEndpointInterface) => {
  const decorators = Object.keys(args)
    .filter(key => key)
    .map(key => APP_ENDPOINT_ARGS_MAP[key](args[key]));

  return applyDecorators(...decorators);
};
