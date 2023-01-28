import { Cliente } from './cliente.entity';
import { BaseEntity } from './../../shared/entity/base.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
@Entity('telefone')
export class Telefone extends BaseEntity {
  @Column({ type: 'varchar', length: 5, nullable: false, default: '+55' })
  telefone_pais: string;
  @Column({ type: 'varchar', length: 5, nullable: true, default: '11' })
  telefone_ddd: string;
  @Column({ type: 'varchar', length: 15, nullable: true })
  telefone_numero: string;
  @Column({
    type: 'enum',
    enum: ['celular', 'fixo', 'comercial', 'rural', 'whatsapp'],
    nullable: true,
    default: 'celular',
  })
  telefone_tipo: string;
  @ManyToOne(() => Cliente, (user) => user.telefones, { nullable: true })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
