import { MinLength, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ClienteDto {
  @ApiProperty({ example: 'João da Silva' })
  @MinLength(3)
  @IsNotEmpty()
  nome: string;
  @ApiProperty({ example: 'joao2@emai2l.com' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: '12345618900' })
  cpf: string;
}
