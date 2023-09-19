import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class Context extends PrismaClient<Prisma.PrismaClientOptions, 'query'> {
  constructor(config: ConfigService, private logger: LoggerService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL')
        }
      },
      log: [
        {
          emit: 'stdout',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    });

    this.$on('query', (e: Prisma.QueryEvent) => {
      logger.log('\n' + '='.repeat(100))
      logger.log(`Params: ${e.params}`)
      logger.log(`\nQuery: ${e.query}`)
      logger.log(`\nDuration: ${e.duration}s`)
      logger.log('='.repeat(100))

    })
    
  }
}
