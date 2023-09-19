import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MailService } from './mail.service';
import { CreateMailDto } from './mail.type';
import { JwtGuard } from 'src/auth/auth.guard';

@UseGuards(JwtGuard)
@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Get('all')
  async getAll() {
    return await this.mailService.getAll();
  }

  @Post()
  async create(
    @Body() createMailDto: CreateMailDto
  ) {
    return await this.mailService.create(
      createMailDto
    );
  }
}
