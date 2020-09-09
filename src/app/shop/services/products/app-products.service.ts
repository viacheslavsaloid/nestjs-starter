import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AppProductEntity } from '../../database';

@Injectable()
export class AppProductsService extends TypeOrmCrudService<AppProductEntity> {
  constructor(@InjectRepository(AppProductEntity) repository) {
    super(repository);
  }
}
