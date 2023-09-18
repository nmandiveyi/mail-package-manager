import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Context extends PrismaClient {
  constructor(
    config: ConfigService
  ) {
    super({
      datasources: {
        db: {
          url: config.get("DATABASE_URL")
        }
      },
      log: [
        {
          emit: 'event',
          level: 'query'
        },
        {
          emit: 'event',
          level: 'info'
        },
        {
          emit: 'event',
          level: 'warn'
        },
        {
          emit: 'event',
          level: 'error'
        },

      ]
    });
  }
}
