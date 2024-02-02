import { Injectable } from '@nestjs/common';
import { CompileCodeDto } from './dto/compile-code.dto';

@Injectable()
export class CompilersService {
  compile(compileCodeDto: CompileCodeDto) {
    return 'This action adds a new compiler ' + compileCodeDto;
  }
}
