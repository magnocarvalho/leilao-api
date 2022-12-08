import { PartialType } from '@nestjs/swagger';
import { CreateArremateDto } from './create-arremate.dto';

export class UpdateArremateDto extends PartialType(CreateArremateDto) {}
