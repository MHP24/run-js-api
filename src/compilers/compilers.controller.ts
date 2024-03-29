import { Controller, Post, Body } from '@nestjs/common';
import { CompilersService } from './compilers.service';
import { CompileCodeDto } from './dto/compile-code.dto';

@Controller('compilers')
export class CompilersController {
  constructor(private readonly compilersService: CompilersService) {}

  // * Run code (typescript, javascript supported)
  @Post('run')
  compile(@Body() compileCodeDto: CompileCodeDto) {
    return this.compilersService.run(compileCodeDto);
  }
}
