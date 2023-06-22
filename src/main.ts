import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ajuste de timezone
  process.env.TZ = '-03:00';

  // validação das entidades envolvidas nos requests
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(8080);
}
bootstrap();
