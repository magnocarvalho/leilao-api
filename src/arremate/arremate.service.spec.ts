import { Test, TestingModule } from '@nestjs/testing';
import { ArremateService } from './arremate.service';

describe('ArremateService', () => {
  let service: ArremateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArremateService],
    }).compile();

    service = module.get<ArremateService>(ArremateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
