import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMailDto } from './mail.type';

@Injectable()
export class MailService {
  constructor(
    private prismaService: PrismaService
  ){}

  async getAll() {
    return await this.prismaService.mail.findMany();
  }

  async create(createMailDto: CreateMailDto) {
    return await this.prismaService.mail.create({
      data: {
        ...createMailDto
      }
    })
  }
}
