import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://dbuser:dbuser@localhost:5432/app_db?schema=mail'
        }
      }
    });
  }
}
