export enum OrderEventsTypes {
  ORDER_CREATED = 'ORDER_CREATED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
  ORDER_APPROVED = 'ORDER_APPROVED',
  ORDER_REJECTED = 'ORDER_REJECTED',
}

export enum CustomerEventTypes {
  CREDIT_RESERVED = 'CREDIT_RESERVED',
  CREDIT_RESERVATION_FAILED = 'CREDIT_RESERVATION_FAILED',
  CUSTOMER_VALIDATION_FAILED = 'CUSTOMER_VALIDATION_FAILED',
}

export interface OrderEvent {
  type: OrderEventsTypes;
  orderId: string;
  customerId: string;
  orderTotal: number;
}

export interface CustomerEvent {
  type: CustomerEventTypes;
  orderId: string;
  customerId: string;
  orderTotal: number;
}
