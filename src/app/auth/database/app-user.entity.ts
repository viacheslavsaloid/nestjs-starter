import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { AppUserRoleEnum } from './app-user-role.enum';

@Entity()
export class AppUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ApiProperty({ type: [], enum: AppUserRoleEnum })
  @Column('simple-array')
  roles: AppUserRoleEnum[];

  @Exclude()
  @Column()
  password: string;
}
