import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from '@braianmg-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
