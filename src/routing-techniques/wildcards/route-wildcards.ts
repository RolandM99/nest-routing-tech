import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class RouteWildCardsController {
  @Get('*') // Define the route path with a wildcard
  handleNotFound(@Param() params) { 
    return '404 Not Found';
  }
}


