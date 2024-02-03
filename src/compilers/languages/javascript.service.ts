import { BadRequestException, Injectable } from '@nestjs/common';
import { VM } from 'vm2';
import { CompilerInterface } from '../interfaces/compiler.interface';

@Injectable()
export class JavaScriptCompiler implements CompilerInterface {
  run(code: string) {
    try {
      const vm = new VM({ timeout: 1000 });
      const modifiedCode = `
        let VM2OutputsLogTracker = []
        ${code.replace(/console\.log/g, 'VM2OutputsLogTracker.push')}
        VM2OutputsLogTracker
      `;
      const outputs = vm.run(modifiedCode);

      return { outputs, execution: 'success' };
    } catch (error) {
      throw new BadRequestException({
        error: `${error}`,
        execution: 'failed',
      });
    }
  }
}
