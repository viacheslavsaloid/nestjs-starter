import { Test, TestingModule } from '@nestjs/testing';
import { AppProductsController } from './app-products.controller';

describe('Products Controller', () => {
  let controller: AppProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppProductsController],
    }).compile();

    controller = module.get<AppProductsController>(AppProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
