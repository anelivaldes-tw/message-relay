import { Module } from "@nestjs/common";
import { EventPublisherModule } from "../event-publisher/event-publisher.module";
import { EventPublisherService } from "../event-publisher/event-publisher.service";

import { outboxProviders } from "./outbox.providers";
import { databaseProviders } from "../database/database.providers";
import { OutboxService } from "./outbox.service";

@Module({
  imports: [EventPublisherModule],
  providers: [
    OutboxService,
    ...outboxProviders,
    ...databaseProviders,
    EventPublisherService
  ],
  exports: [OutboxService]
})
export class OutboxModule {
}
