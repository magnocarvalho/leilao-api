import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateTelefoneDto {
  @IsNotEmpty()
  readonly telefone_numero: string;
  @IsNotEmpty()
  readonly telefone_tipo: string;
  @IsNotEmpty()
  readonly telefone_ddd: string;
  @IsNotEmpty()
  readonly telefone_pais: string;
  @ApiProperty({ required: false })
  readonly cliente_id?: number;
}
