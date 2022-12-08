import { Test, TestingModule } from '@nestjs/testing';
import { ArremateController } from './arremate.controller';
import { ArremateService } from './arremate.service';

describe('ArremateController', () => {
  let controller: ArremateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArremateController],
      providers: [ArremateService],
    }).compile();

    controller = module.get<ArremateController>(ArremateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
