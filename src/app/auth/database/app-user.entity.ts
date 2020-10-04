import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserRoleEnum } from './app-user-role.enum';
import { AppSwaggerEntityDecorator } from 'src/app/shared/decorators/app-swagger-entity.decorator';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity()
export class AppUserEntity {
  @PrimaryGeneratedColumn()
  @ApiHideProperty()
  id: number;

  @AppSwaggerEntityDecorator({ example: 'Den Brown' })
  @Column()
  username: string;

  @Column('simple-array')
  roles: AppUserRoleEnum[];

  @AppSwaggerEntityDecorator({ example: 'denbrown' })
  @Column()
  password: string;
}
