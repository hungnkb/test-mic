import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @MessagePattern({cmd: 'auth-get'})
  async getHello() {
    return await this.appService.getHello();
  }
}
