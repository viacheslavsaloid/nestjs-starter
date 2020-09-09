export interface AppSwaggerResponseInterface {
  type?: any;
  description?: string;
  isArray?: boolean;
}

export interface AppSwaggerEndpointsMapInterface {
  [key: string]: AppSwaggerEndpointInterface;
}

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
