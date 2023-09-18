import {
  IsNotEmpty,
  IsNumber,
  IsString
} from 'class-validator';

export class CreateMailDto {
  @IsNumber()
  @IsNotEmpty()
  ownerId: number;

  @IsString()
  typeId: string;

  @IsString()
  statusId: string;

  @IsString()
  notes: string;
}
