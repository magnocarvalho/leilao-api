import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArremateService } from './arremate.service';
import { CreateArremateDto } from './dto/create-arremate.dto';
import { UpdateArremateDto } from './dto/update-arremate.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('arremate')
@ApiTags('Arremate')
export class ArremateController {
  constructor(private readonly arremateService: ArremateService) {}

  @Post()
  create(@Body() createArremateDto: CreateArremateDto) {
    return this.arremateService.create(createArremateDto);
  }

  @Get()
  findAll() {
    return this.arremateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arremateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArremateDto: UpdateArremateDto,
  ) {
    return this.arremateService.update(+id, updateArremateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arremateService.remove(+id);
  }
}
