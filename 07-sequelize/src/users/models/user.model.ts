import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  email: string;
}
