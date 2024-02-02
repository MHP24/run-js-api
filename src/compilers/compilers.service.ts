import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { CompilerInterface } from './interfaces/compiler.interface';
import { JavaScriptCompiler } from './languages/javascript.service';
import { TypeScriptCompiler } from './languages/typescript.service';
import { CompileCodeDto } from './dto/compile-code.dto';

@Injectable()
export class CompilersService {
  private compilers: { [key: string]: CompilerInterface };

  constructor(
    private readonly javaScriptCompiler: JavaScriptCompiler,
    private readonly typeScriptCompiler: TypeScriptCompiler,
  ) {
    this.compilers = {
      javascript: this.javaScriptCompiler,
      typescript: this.typeScriptCompiler,
    };
  }

  run({ language, code }: CompileCodeDto) {
    const compiler = this.getCompilerByLanguage(language);
    return compiler.run(code);
  }

  private getCompilerByLanguage(language: string): CompilerInterface {
    const compiler = this.compilers[language.toLowerCase()];
    if (compiler) return compiler;
    throw new BadRequestException(`Language "${language}" is not supported.`);
  }
}
