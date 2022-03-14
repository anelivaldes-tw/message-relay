import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './microserviceConfig';
import { OutboxService } from './outbox/outbox.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice(microserviceConfig);
  await app.startAllMicroservices();
  await app.listen(3002);
  const outboxService = app.get<OutboxService>(OutboxService);
  outboxService.poll();
}

bootstrap();
