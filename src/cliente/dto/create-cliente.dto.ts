import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiCreatedResponse, PartialType, ApiProperty } from '@nestjs/swagger';
import { Cliente } from '../entities/cliente.entity';
import { Telefone } from '../entities/telefone.entity';
import { CreateTelefoneDto } from './create-telefone.dto';

@ApiCreatedResponse({
  description: 'The record has been successfully created.',
})
export class CreateClienteDto {
  @ApiProperty({ example: 'João da Silva' })
  @MinLength(3)
  @IsNotEmpty()
  nome: string;
  @ApiProperty({ example: 'joao@email.com' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: '12345678900' })
  cpf: string;
  @ApiProperty({
    isArray: true,
    type: [CreateTelefoneDto],
    example: [
      {
        telefone_numero: '11999999999',
        telefone_ddd: '43',
        telefone_tipo: 'celular',
        telefone_pais: '+55',
      } as CreateTelefoneDto,
    ],
  })
  telefones?: CreateTelefoneDto[];
  @ApiProperty({ example: '1999-01-01' })
  data_nascimento: Date;
}
