import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// Circular Dependency
import { AppSwaggerColumnDecorator } from 'src/app/shared/decorators/database/app-swagger-column.decorator';

@Entity()
export class AppBaseColumn {
  @AppSwaggerColumnDecorator({ hide: true })
  @PrimaryGeneratedColumn()
  id: number;
}
