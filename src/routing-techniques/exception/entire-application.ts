// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { HttpExceptionFilter } from './exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
