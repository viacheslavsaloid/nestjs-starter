export interface AppEndpointsMapInterface {
  [key: string]: AppEndpointInterface;
}

export interface AppEndpointInterface {
  method?: {
    type?: 'get' | 'post' | 'delete' | 'patch' | 'put';
    url?: string;
  };
  code?: {
    statusCode: number;
  };
  guards?: any;
}

export interface AppEndpointMethodsMapInterface {
  get: () => MethodDecorator;
  post: () => MethodDecorator;
  delete: () => MethodDecorator;
  patch: () => MethodDecorator;
  put: () => MethodDecorator;
}
