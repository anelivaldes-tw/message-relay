import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisherService } from './event-publisher.service';

describe('EventPublisherService', () => {
  let service: EventPublisherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventPublisherService],
    }).compile();

    service = module.get<EventPublisherService>(EventPublisherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
