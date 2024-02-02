import { BadRequestException, Injectable } from '@nestjs/common';
import { VM } from 'vm2';
import { CompilerInterface } from '../interfaces/compiler.interface';

@Injectable()
export class JavaScriptCompiler implements CompilerInterface {
  run(code: string) {
    try {
      const vm = new VM({ timeout: 1000 });
      const output = vm.run(code.replace(/console\.log/g, ''));
      return { output: JSON.stringify(output) };
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
}
