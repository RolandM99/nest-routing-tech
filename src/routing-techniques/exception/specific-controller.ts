// src/app.controller.ts
import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './exception-filters';

@Controller()
@UseFilters(HttpExceptionFilter)
export class AppController {
  @Get('test')
  test() {
    throw new Error('Something went wrong');
  }
}
