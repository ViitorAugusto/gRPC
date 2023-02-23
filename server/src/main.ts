import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'comunication',
      protoPath: join(__dirname + '/protos/comunication.proto'),
      keepCase: true,
    },
  });
  
  await app.listen();
}
bootstrap();
