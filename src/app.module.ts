import { Login } from './cliente/entities/login.entity';
import { Cliente } from './cliente/entities/cliente.entity';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { LanceModule } from './lance/lance.module';
import { ArremateModule } from './arremate/arremate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefone } from './cliente/entities/telefone.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test3',
      entities: [Cliente, Telefone, Login],
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
    }),
    CacheModule.register({ isGlobal: true }),
    ProdutoModule,
    ClienteModule,
    LanceModule,
    ArremateModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
