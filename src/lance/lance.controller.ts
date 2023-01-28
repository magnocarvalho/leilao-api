import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanceService } from './lance.service';
import { CreateLanceDto } from './dto/create-lance.dto';
import { UpdateLanceDto } from './dto/update-lance.dto';

@Controller('lance')
@ApiTags('Lance')
export class LanceController {
  constructor(private readonly lanceService: LanceService) {}

  @Post()
  create(@Body() createLanceDto: CreateLanceDto) {
    return this.lanceService.create(createLanceDto);
  }

  @Get()
  findAll() {
    return this.lanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanceDto: UpdateLanceDto) {
    return this.lanceService.update(+id, updateLanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lanceService.remove(+id);
  }
}
