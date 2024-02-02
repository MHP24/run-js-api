import { type BadRequestException } from '@nestjs/common';

export interface CompilerInterface {
  run: (code: string) => { output: string } | BadRequestException;
}
