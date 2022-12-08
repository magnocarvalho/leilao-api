import { Module } from '@nestjs/common';
import { ArremateService } from './arremate.service';
import { ArremateController } from './arremate.controller';

@Module({
  controllers: [ArremateController],
  providers: [ArremateService]
})
export class ArremateModule {}
