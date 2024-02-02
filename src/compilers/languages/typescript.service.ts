import { Injectable } from '@nestjs/common';
import { CompilerInterface } from '../interfaces/compiler.interface';
import { transpileModule, ScriptTarget, ModuleKind } from 'typescript';
import { JavaScriptCompiler } from './javascript.service';

@Injectable()
export class TypeScriptCompiler implements CompilerInterface {
  constructor(private readonly javaScriptCompiler: JavaScriptCompiler) {}

  run(code: string) {
    // * Transpile from typescript to javascript
    const javaScriptCode = transpileModule(code, {
      compilerOptions: {
        target: ScriptTarget.ES2016,
        module: ModuleKind.CommonJS,
      },
    }).outputText;

    return this.javaScriptCompiler.run(javaScriptCode);
  }
}
