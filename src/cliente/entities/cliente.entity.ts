import { BaseEntity } from './../../shared/entity/base.entity';
import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Telefone } from './telefone.entity';

@Entity('cliente')
export class Cliente extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  nome: string;
  @Column({
    type: 'varchar',
    length: 72,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
  cpf: string;
  @Column({ type: 'date', nullable: true })
  data_nascimento: Date;
  //   @OneToMany((type) => Telefone, (photo) => photo.user)
  //   photos: Telefone[];
  @OneToMany(() => Telefone, (telefone) => telefone.cliente)
  telefones: Telefone[];
}
