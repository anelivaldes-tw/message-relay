import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Outbox extends Model {
  @Column
  type: string;

  @Column
  orderTotal: number;

  @Column
  customerId: string;

  @Column
  orderId: string;

  @Column
  sent: number;
}
