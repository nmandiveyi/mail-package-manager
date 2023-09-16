import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  console.log(`\nNestJS server running at http://localhost:${port}\n`)
}

bootstrap(8080);
