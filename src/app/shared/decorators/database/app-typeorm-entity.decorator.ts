import { applyDecorators } from '@nestjs/common';
import { Entity } from 'typeorm';

/**
 * @description Decorator to easy work with typeorm for entities
 */
export function AppTypeormEntityDecorator() {
  const decorators = [Entity()];

  return applyDecorators(...decorators);
}
