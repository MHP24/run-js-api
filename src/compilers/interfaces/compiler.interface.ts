import { type BadRequestException } from '@nestjs/common';

export interface CompilerInterface {
  run: (code: string) => { outputs: string[] } | BadRequestException;
}
