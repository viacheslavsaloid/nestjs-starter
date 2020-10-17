import { Type } from '@nestjs/common/interfaces/type.interface';
import { DynamicModule } from '@nestjs/common/interfaces/modules/dynamic-module.interface';
import { ForwardReference } from '@nestjs/common/interfaces/modules/forward-reference.interface';
import { Provider } from '@nestjs/common';
import { Abstract } from '@nestjs/common/interfaces/abstract.interface';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export type AppImportsInterface = Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
export type AppExportsInterface = Array<
  // eslint-disable-next-line @typescript-eslint/ban-types
  DynamicModule | Promise<DynamicModule> | string | symbol | Provider | ForwardReference | Abstract<any> | Function
>;
export type AppProvidersInterface = Provider[];
export type AppControllersInterface = Type<any>[];

export type AppEntetiesInterface = EntityClassOrSchema[];
