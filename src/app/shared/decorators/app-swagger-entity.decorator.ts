import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export function AppSwaggerEntityDecorator(args?: ApiPropertyOptions) {
  return applyDecorators(ApiProperty(args));
}
