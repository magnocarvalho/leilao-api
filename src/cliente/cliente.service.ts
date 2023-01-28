import { ClienteDto } from './dto/cliente.dto';
import { PageOptionsDto } from './../shared/dto/page-options.dto';
import { PageDto } from './../shared/dto/page.dto';
import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ILike, Not, Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private readonly clienteRep: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.clienteRep.save(createClienteDto);
  }

  // findAll() {
  //   return this.clienteRep.findAndCount({ relations: { telefones: true } });
  // }
  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<ClienteDto>> {
    const whereOption: any = { nome: undefined, id: Not('null') };
    if (pageOptionsDto.search) {
      whereOption.nome = ILike(`%${pageOptionsDto.search}%`);
    }
    const [listagem, qtd] = await this.clienteRep.findAndCount({
      order: {
        created_at: pageOptionsDto.order || 'DESC',
      },
      where: whereOption,
      skip: pageOptionsDto.page,
      take: pageOptionsDto.limit,
    });
    return new PageDto(listagem, pageOptionsDto, qtd);
  }

  findOne(id: number) {
    return this.clienteRep.findOne({
      where: { id },
      relations: { telefones: true },
    });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
