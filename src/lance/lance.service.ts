import { Injectable } from '@nestjs/common';
import { CreateLanceDto } from './dto/create-lance.dto';
import { UpdateLanceDto } from './dto/update-lance.dto';

@Injectable()
export class LanceService {
  create(createLanceDto: CreateLanceDto) {
    return 'This action adds a new lance';
  }

  findAll() {
    return `This action returns all lance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lance`;
  }

  update(id: number, updateLanceDto: UpdateLanceDto) {
    return `This action updates a #${id} lance`;
  }

  remove(id: number) {
    return `This action removes a #${id} lance`;
  }
}
