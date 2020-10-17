import { applyDecorators } from '@nestjs/common';
import { Column } from 'typeorm';

export interface mymyInterface {
  type?: 'simple-array';
}

/**
 * @description Decorator to easy work with typeorms for columns
 */
export function AppTypeormColumnDecorator(args: mymyInterface = {}) {
  const { type } = args;

  const decorators = [Column(type)];

  return applyDecorators(...decorators);
}
