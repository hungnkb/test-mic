import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configApp = await NestFactory.create(AppModule);
  const configService = configApp.get(ConfigService);
  const HOST = configService.get('HOST');
  const PORT = configService.get('PORT');
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: HOST,
      port: PORT,
    },
  });
  await app.startAllMicroservices();
  await app.listen(PORT, () => {
    console.log(`server is running on ${HOST}:${PORT}`);
  });
}

bootstrap();
