import { Injectable } from '@nestjs/common';

const userList = [
  { username: 'hungnkb', password: '123456' },
  { username: 'john', password: '123456' },
];

export class LoginDto {
  username: string;
  password: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  login({ username, password }: LoginDto) {
    for (let user of userList) {
      const condition =
        user.username === username && user.password === password;
      if (condition) {
        return true;
      }
    }
    return false;
  }
}
