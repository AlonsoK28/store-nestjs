import { PartialType } from '@nestjs/mapped-types';

// validator
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// dtos
import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsNotEmpty()
  @IsBoolean()
  edited: boolean;

  @IsString()
  @IsOptional()
  editedByUsername: string;
}
