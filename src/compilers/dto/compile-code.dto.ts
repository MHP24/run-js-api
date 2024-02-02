import { IsString } from 'class-validator';

export class CompileCodeDto {
  @IsString({
    message: 'Language required (javascript, typescript)',
  })
  language: string;

  @IsString({
    message: 'Source code required',
  })
  code: string;
}
