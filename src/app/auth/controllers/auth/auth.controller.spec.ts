import { Test, TestingModule } from '@nestjs/testing';
import { AppAuthController } from 'src/app/auth/controllers/auth/auth.controller';

describe('Auth Controller', () => {
  let controller: AppAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppAuthController],
    }).compile();

    controller = module.get<AppAuthController>(AppAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
