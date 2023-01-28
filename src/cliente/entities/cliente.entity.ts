import { BaseEntity } from './../../shared/entity/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Telefone } from './telefone.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity('cliente')
export class Cliente extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  @IsNotEmpty()
  nome: string;
  @Column({
    type: 'varchar',
    length: 72,
    nullable: false,
    unique: true,
  })
  @IsEmail()
  email: string;
  @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
  cpf: string;
  @Column({ type: 'date', nullable: true })
  data_nascimento: Date;
  //   @OneToMany((type) => Telefone, (photo) => photo.user)
  //   photos: Telefone[];
  @OneToMany(() => Telefone, (telefone) => telefone.cliente, {
    nullable: true,
    cascade: ['insert', 'update'],
  })
  telefones: Telefone[];
}
