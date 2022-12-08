import { Injectable } from '@nestjs/common';
import { CreateArremateDto } from './dto/create-arremate.dto';
import { UpdateArremateDto } from './dto/update-arremate.dto';

@Injectable()
export class ArremateService {
  create(createArremateDto: CreateArremateDto) {
    return 'This action adds a new arremate';
  }

  findAll() {
    return `This action returns all arremate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arremate`;
  }

  update(id: number, updateArremateDto: UpdateArremateDto) {
    return `This action updates a #${id} arremate`;
  }

  remove(id: number) {
    return `This action removes a #${id} arremate`;
  }
}
