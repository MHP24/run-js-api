import { Module } from '@nestjs/common';
import { CompilersService } from './compilers.service';
import { CompilersController } from './compilers.controller';
import { JavaScriptCompiler } from './languages/javascript.service';
import { TypeScriptCompiler } from './languages/typescript.service';

@Module({
  controllers: [CompilersController],
  providers: [CompilersService, JavaScriptCompiler, TypeScriptCompiler],
})
export class CompilersModule {}
