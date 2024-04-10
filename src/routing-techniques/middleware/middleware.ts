import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, next: Function) {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
  }
}
