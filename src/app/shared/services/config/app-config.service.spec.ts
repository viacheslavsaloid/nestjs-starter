import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from 'src/app/shared/services/config/app-config.service';

describe('ConfigService', () => {
  let service: AppConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppConfigService],
    }).compile();

    service = module.get<AppConfigService>(AppConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
