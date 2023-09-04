import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('/subscribers')
export class AppController {
  constructor() {}

  @Get('/')
  @MessagePattern({ cmd: 'get-subscribers' })
  getHello(): string {
    console.log(123);
    return 'hello';
  }
}
