import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
