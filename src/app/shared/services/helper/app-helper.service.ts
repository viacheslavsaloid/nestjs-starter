import { Injectable } from '@nestjs/common';
import { generate } from 'generate-password';
import {
  AppHelperServiceGenerateRandomPasswordArgsInterface,
  AppHelperServiceParseObjectArgsInterface,
} from 'src/app/shared/interfaces/services';

/**
 * @description Sevice for all helpers functions
 */
@Injectable()
export class AppHelperService {
  /**
   * @description Method to get specific fields of object
   */
  public parseObject<T>(args: AppHelperServiceParseObjectArgsInterface<T>): T {
    const { object, exclude = [], include = [] } = args;
    const newObject = { ...object };

    Object.keys(newObject)
      .filter(
        (field: any) =>
          (!!include.length && !include.includes(field)) || (!!exclude.length && !!exclude.includes(field)),
      )
      .forEach(field => {
        delete newObject[field];
      });

    return newObject;
  }

  /**
   * @description Method to get random password
   */
  public generateRandomPassword(args?: AppHelperServiceGenerateRandomPasswordArgsInterface): string {
    const { length = 10, numbers = true } = args;

    return generate({
      length,
      numbers,
    });
  }
}
