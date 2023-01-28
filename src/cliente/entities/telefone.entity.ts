import { Cliente } from './cliente.entity';
import { BaseEntity } from './../../shared/entity/base.entity';
import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
@Entity('telefone')
export class Telefone extends BaseEntity {
  @Column({ type: 'varchar', length: 5, nullable: true, default: '+55' })
  telefone_pais: string;
  @Column({ type: 'varchar', length: 5, nullable: true, default: '' })
  telefone_uf: string;
  @Column({ type: 'varchar', length: 15, nullable: true })
  telefone_numero: string;
  @ManyToOne(() => Cliente, (user) => user.telefones)
  cliente: Cliente;
}
