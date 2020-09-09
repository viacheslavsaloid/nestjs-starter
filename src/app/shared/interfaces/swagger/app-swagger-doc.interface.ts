export type AppSwaggerDocsArrInterface = AppSwaggerDocInterface[];

export interface AppSwaggerDocInterface {
  tag?: string;
  url?: string;
  title?: string;
  description?: string;
  module?: any;
  auth?: 'bearer' | 'basic';
}
