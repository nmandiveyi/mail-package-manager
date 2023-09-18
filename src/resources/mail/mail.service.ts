import { Injectable } from '@nestjs/common';
import { Context } from 'src/context/context.service';
import { CreateMailDto } from './mail.type';

@Injectable()
export class MailService {
  constructor(private context: Context) {}

  async getAll() {
    return await this.context.mail.findMany();
  }

  async create(createMailDto: CreateMailDto) {
    return await this.context.mail.create({
      data: {
        ...createMailDto
      }
    });
  }
}
