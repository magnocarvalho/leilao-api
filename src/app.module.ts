import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { LanceModule } from './lance/lance.module';
import { ArremateModule } from './arremate/arremate.module';

@Module({
  imports: [ProdutoModule, ClienteModule, LanceModule, ArremateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
