import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(port) {
  const app = await NestFactory.create(
    AppModule,
  );
  
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port);

  const server = app.getHttpServer()
  const router = server._events.request._router;

  const routes: [] = router.stack
    .map(routeObj => {
      if (routeObj.route) {
        return {
          route: {
          path: routeObj.route?.path,
          method: routeObj.route?.stack[0].method,
        },
      };
    }})
    .filter(routeItem => !!routeItem);

    console.log(routes);
    console.log(`\nNestJS server running at http://localhost:${port}\n`)
  }

bootstrap(8080);


