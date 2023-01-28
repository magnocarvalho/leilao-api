import { BaseEntity } from './../../shared/entity/base.entity';
import { Cliente } from './cliente.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('login')
export class Login extends BaseEntity {
  @Column({ type: 'uuid' })
  firebase_id: string;

  @Column({ type: 'json' })
  data: any;

  @OneToOne(() => Cliente, { nullable: true })
  @JoinColumn({ name: 'client_id' })
  client: Cliente;
}
