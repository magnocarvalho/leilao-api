import { ClienteDto } from './dto/cliente.dto';
import { PageDto } from './../shared/dto/page.dto';
import { PageOptionsDto } from './../shared/dto/page-options.dto';
import { ApiPaginatedResponse } from './../shared/paginated/api-paginated.decorator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { HttpCode, Query, UseInterceptors } from '@nestjs/common/decorators';
import { CacheInterceptor } from '@nestjs/common/cache';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('cliente')
@ApiTags('Cliente')
@UseInterceptors(CacheInterceptor)
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiProperty({ type: CreateClienteDto })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiPaginatedResponse(ClienteDto)
  findAll(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<ClienteDto>> {
    return this.clienteService.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
