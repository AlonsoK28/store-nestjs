import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsOptional()
  category: string;

  @IsOptional()
  description: string;

  @IsOptional()
  country: string;
}
