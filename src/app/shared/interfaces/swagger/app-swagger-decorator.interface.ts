import { AppKeyValueInterface } from 'src/app/shared/interfaces/helpers/app-key-value.interface';

export interface AppSwaggerResponseInterface {
  type?: any;
  description?: string;
  isArray?: boolean;
}

export type AppSwaggerEndpointsMapInterface = AppKeyValueInterface<AppSwaggerEndpointInterface>;

export interface AppSwaggerEndpointInterface {
  tag?: string;
  auth?: boolean;
  created?: AppSwaggerResponseInterface;
  ok?: AppSwaggerResponseInterface;
  unauthorized?: AppSwaggerResponseInterface;
}

export interface AppSwaggerDecoratorsMapInterface {
  tag: () => MethodDecorator & ClassDecorator;
  created: () => MethodDecorator;
  ok: () => MethodDecorator;
  auth: () => MethodDecorator;
  unauthorized: (args: any) => MethodDecorator & ClassDecorator;
}
