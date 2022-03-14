import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OutboxModule } from './outbox/outbox.module';
import { EventPublisherModule } from './event-publisher/event-publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    OutboxModule,
    EventPublisherModule,
  ],
})
export class AppModule {}
