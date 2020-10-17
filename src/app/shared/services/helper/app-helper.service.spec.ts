import { Test, TestingModule } from '@nestjs/testing';
import { AppHelperService } from 'src/app/shared/services/helper/app-helper.service';

describe('AppHelperService', () => {
  let service: AppHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppHelperService],
    }).compile();

    service = module.get<AppHelperService>(AppHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
