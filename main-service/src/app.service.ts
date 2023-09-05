import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private authClient: ClientProxy) {}

  async getHello() {
    return this.authClient.send('auth-login', {
      username: 'hungnkb',
      password: '123456',
    });
  }
}
