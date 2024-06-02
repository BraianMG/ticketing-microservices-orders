import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@braianmg-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
