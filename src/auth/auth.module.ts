import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    ],
  providers: [AuthService, AuthStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
