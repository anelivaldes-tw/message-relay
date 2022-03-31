export enum OrderEventsTypes {
  ORDER_CREATED = 'ORDER_CREATED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
  ORDER_REJECTED = 'ORDER_REJECTED',
  ORDER_APPROVED = 'ORDER_APPROVED',
}

export interface OrderEvent {
  state: OrderEventsTypes;
  orderId: string;
  customerId: string;
  orderTotal: number;
}
