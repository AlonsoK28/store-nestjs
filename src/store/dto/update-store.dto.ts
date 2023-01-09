// import { PartialType } from '@nestjs/mapped-types';
import { IsString, MinLength } from 'class-validator';
// import { CreateStoreDto } from './create-store.dto';

// export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
export class UpdateStoreDto {
  @IsString()
  @MinLength(3)
  name: string;
}
