import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './context/prisma.module';
import { MailController } from './resources/mail/mail.controller';
import { MailService } from './resources/mail/mail.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    PrismaModule
  ],
  controllers: [MailController],
  providers: [MailService]
})
export class AppModule {}
