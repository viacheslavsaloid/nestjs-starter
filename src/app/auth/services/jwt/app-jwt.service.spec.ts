import { Test, TestingModule } from '@nestjs/testing';
import { AppJwtService } from 'src/app/auth/services/jwt/app-jwt.service';

describe('AppAuthService', () => {
  let service: AppJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppJwtService],
    }).compile();

    service = module.get<AppJwtService>(AppJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
