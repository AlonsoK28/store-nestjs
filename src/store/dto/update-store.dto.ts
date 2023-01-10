import { PartialType } from '@nestjs/mapped-types';

// validator
import { IsBoolean, IsNotEmpty } from 'class-validator';

// dtos
import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsNotEmpty()
  @IsBoolean()
  edited: boolean;
}
