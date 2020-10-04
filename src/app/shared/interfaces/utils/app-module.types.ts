import { Type } from '@nestjs/common/interfaces/type.interface';
import { DynamicModule } from '@nestjs/common/interfaces/modules/dynamic-module.interface';
import { ForwardReference } from '@nestjs/common/interfaces/modules/forward-reference.interface';
import { Provider } from '@nestjs/common';
import { Abstract } from '@nestjs/common/interfaces/abstract.interface';

export type AppImportsType = Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
export type AppExportsType = Array<
  // eslint-disable-next-line @typescript-eslint/ban-types
  DynamicModule | Promise<DynamicModule> | string | symbol | Provider | ForwardReference | Abstract<any> | Function
>;
export type AppProvidersType = Provider[];
export type AppControllersType = Type<any>[];
