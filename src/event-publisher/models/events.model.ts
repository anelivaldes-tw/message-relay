export enum OrderEventsTypes {
  ORDER_CREATED = 'ORDER_CREATED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
}

export interface OrderEvent {
  state: OrderEventsTypes;
  orderId: string;
  customerId: string;
  orderTotal: number;
}
