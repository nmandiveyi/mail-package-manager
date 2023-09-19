import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './context/context.module';
import { MailController } from './resources/mail/mail.controller';
import { MailService } from './resources/mail/mail.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LoggerModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [MailController],
  providers: [MailService],
  
})
export class AppModule {}
