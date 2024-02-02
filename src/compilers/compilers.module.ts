import { Module } from '@nestjs/common';
import { CompilersService } from './compilers.service';
import { CompilersController } from './compilers.controller';

@Module({
  controllers: [CompilersController],
  providers: [CompilersService],
})
export class CompilersModule {}
