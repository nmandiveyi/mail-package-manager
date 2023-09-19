import { Global, Module } from '@nestjs/common';
import { Context } from './context.service';
import { LoggerModule } from 'src/logger/logger.module';

@Global()
@Module({
  providers: [Context],
  exports: [Context],
  imports: [LoggerModule]
})
export class PrismaModule {}
