import { Controller, Get } from '@nestjs/common';
import {AppService, LoginDto} from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('auth-login')
  test(data: LoginDto) {
    return this.appService.login(data);
  }

  @EventPattern('get-auth1')
  test2(data: LoginDto) {
    return this.appService.login(data);
  }
}
