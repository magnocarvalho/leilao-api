import { Login } from './entities/login.entity';
import { Telefone } from './entities/telefone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Cliente } from './entities/cliente.entity';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [TypeOrmModule.forFeature([Cliente, Telefone, Login])],
})
export class ClienteModule {}
