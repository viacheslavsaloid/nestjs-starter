import { ApiHideProperty, ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export interface myInterface extends ApiPropertyOptions {
  hide?: boolean;
}

/**
 * @description Decorator to easy work with swagger for columns
 */
export function AppSwaggerColumnDecorator(args: myInterface) {
  const { hide, ...options } = args;

  const decorators = [ApiProperty(options)];

  if (hide) {
    decorators.push(ApiHideProperty());
  }

  return applyDecorators(...decorators);
}
