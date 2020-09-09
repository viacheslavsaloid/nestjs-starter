import { Test, TestingModule } from '@nestjs/testing';
import { AppProductsService } from './app-products.service';

describe('AppProductsService', () => {
  let service: AppProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppProductsService],
    }).compile();

    service = module.get<AppProductsService>(AppProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
