import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppJwtAuthGuard } from 'src/app/auth/guards';
import { AppProductsCrud } from 'src/app/shop/crud/app-products.crud';
import { AppProductEntity } from 'src/app/shop/database';
import { AppProductsService } from 'src/app/shop/services';

@ApiBearerAuth()
@UseGuards(AppJwtAuthGuard)
@Crud(AppProductsCrud)
@Controller('products')
export class AppProductsController implements CrudController<AppProductEntity> {
  constructor(public service: AppProductsService) {}
}
