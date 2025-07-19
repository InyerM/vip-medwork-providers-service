import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProviderDto {
  @ApiProperty({ example: 'Dr. Camila Rios' })
  @IsString()
  @IsNotEmpty()
  public fullName: string;

  @ApiProperty({ example: 'Cardiology' })
  @IsString()
  @IsNotEmpty()
  public specialty: string;
}
