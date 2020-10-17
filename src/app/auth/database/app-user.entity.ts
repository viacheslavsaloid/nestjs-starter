import { AppUserRoleEnum } from 'src/app/auth/database/app-user-role.enum';
import {
  AppSwaggerColumnDecorator,
  AppTypeormColumnDecorator,
  AppTypeormEntityDecorator,
} from 'src/app/shared/decorators/database';
import { AppBaseColumn } from 'src/app/shared/helpers/database';

/**
 * @description Users Table
 */
@AppTypeormEntityDecorator()
export class AppUserEntity extends AppBaseColumn {
  @AppSwaggerColumnDecorator({ example: 'viacheslavsaloid.work@gmail.com' })
  @AppTypeormColumnDecorator()
  email: string;

  @AppSwaggerColumnDecorator({ hide: true })
  @AppTypeormColumnDecorator()
  password: string;

  @AppTypeormColumnDecorator({ type: 'simple-array' })
  roles: AppUserRoleEnum[];
}
