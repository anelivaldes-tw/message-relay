import { Inject, Injectable } from '@nestjs/common';
import { OUTBOX_REPOSITORY, PENDING, SEQUELIZE } from '../constants';
import { Outbox } from './outbox.entity';
import { EventPublisherService } from '../event-publisher/event-publisher.service';
import {
  OrderEvent,
  OrderEventsTypes,
} from '../event-publisher/models/events.model';

@Injectable()
export class OutboxService {
  pollingInterval = 5000;

  constructor(
    @Inject(OUTBOX_REPOSITORY) private readonly outboxRepository: typeof Outbox,
    @Inject(SEQUELIZE) private readonly sequelize,
    private readonly eventPublisher: EventPublisherService,
  ) {}

  public async poll(): Promise<void> {
    setInterval(() => {
      console.info(
        `${new Date().toLocaleTimeString()}: Polling Outbox table from Order DB`,
      );
      return this.findUnsentEvents();
    }, this.pollingInterval);
  }

  async findUnsentEvents() {
    const unSent = await this.outboxRepository.findAll<Outbox>({
      where: { sent: 0 },
    });
    const count = unSent.length;
    let sent = 1;
    console.log(`Messages to send: ${count}`);
    unSent.forEach((e: Outbox) => {
      if (e.getDataValue('type') === PENDING) {
        const orderCreatedEvent: OrderEvent = {
          type: OrderEventsTypes.ORDER_CREATED,
          orderId: e.getDataValue('orderId'),
          customerId: e.getDataValue('customerId'),
          orderTotal: e.getDataValue('orderTotal'),
        };
        console.log(`---------- Sent ${sent}/${count} ---------`);
        this.eventPublisher.publish(orderCreatedEvent);
        sent++;
        this.outboxRepository.update(
          { sent: 1 },
          { where: { id: e.getDataValue('id') } },
        );
      }
    });
  }
}
