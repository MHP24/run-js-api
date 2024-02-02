import { Module } from '@nestjs/common';
import { CompilersModule } from './compilers/compilers.module';
import { ConfigModule } from '@nestjs/config';
import appConf from './common/config/app.conf';
import { joiValidationSchema } from './common/config/joi.conf';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConf],
      validationSchema: joiValidationSchema,
    }),
    CompilersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
