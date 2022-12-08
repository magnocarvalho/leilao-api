import { PartialType } from '@nestjs/swagger';
import { CreateLanceDto } from './create-lance.dto';

export class UpdateLanceDto extends PartialType(CreateLanceDto) {}
