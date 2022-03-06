import { OUTBOX_REPOSITORY } from '../constants';
import { Outbox } from './outbox.entity';

export const outboxProviders = [
  {
    provide: OUTBOX_REPOSITORY,
    useValue: Outbox,
  },
];
