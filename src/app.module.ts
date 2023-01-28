import { Cliente } from './cliente/entities/cliente.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { LanceModule } from './lance/lance.module';
import { ArremateModule } from './arremate/arremate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefone } from './cliente/entities/telefone.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test3',
      entities: [Cliente, Telefone],
      synchronize: true,
    }),
    ProdutoModule,
    ClienteModule,
    LanceModule,
    ArremateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
