export interface AppHelperServiceParseObjectArgsInterface<T> {
  object: T;
  exclude?: (keyof T)[];
  include?: (keyof T)[];
}

export interface AppHelperServiceGenerateRandomPasswordArgsInterface {
  length: number;
  numbers: boolean;
}
