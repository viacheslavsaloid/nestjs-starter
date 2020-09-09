import { Test, TestingModule } from '@nestjs/testing';
import { AppMediaController } from 'src/app/media/controllers/media/app-media.controller';

describe('App Media Controller', () => {
  let controller: AppMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppMediaController],
    }).compile();

    controller = module.get<AppMediaController>(AppMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
