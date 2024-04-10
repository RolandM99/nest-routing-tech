// src/app.controller.ts
import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './exception-filters';

@Controller()
export class AppController {
  @Get('test')
  @UseFilters(HttpExceptionFilter)
  test() {
    throw new Error('Something went wrong');
  }
}
