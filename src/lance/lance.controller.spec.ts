import { Test, TestingModule } from '@nestjs/testing';
import { LanceController } from './lance.controller';
import { LanceService } from './lance.service';

describe('LanceController', () => {
  let controller: LanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanceController],
      providers: [LanceService],
    }).compile();

    controller = module.get<LanceController>(LanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
