import { Module } from '@nestjs/common';
import { LanceService } from './lance.service';
import { LanceController } from './lance.controller';

@Module({
  controllers: [LanceController],
  providers: [LanceService]
})
export class LanceModule {}
