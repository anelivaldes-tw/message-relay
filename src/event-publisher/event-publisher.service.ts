import { Injectable } from '@nestjs/common';
import { Client, ClientKafka } from '@nestjs/microservices';
import { microserviceConfig } from '../microserviceConfig';

@Injectable()
export class EventPublisherService {
  @Client(microserviceConfig)
  client: ClientKafka;

  publish(event, topic = 'order') {
    this.client.emit<string>(topic, event);
    console.debug('Published:', event);
    console.debug('To:', topic);
  }
}
