import { Test, TestingModule } from '@nestjs/testing';
import { LanceService } from './lance.service';

describe('LanceService', () => {
  let service: LanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanceService],
    }).compile();

    service = module.get<LanceService>(LanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
