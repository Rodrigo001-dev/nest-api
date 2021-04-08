// todo o desenvolvimento no nest é paltado por módulos, tudo o que eu tiver na
// aplicação precisa estár registrado em um módulo para que esse artefato seja
// usado pelo próprio nest e seja usado em outros módulos
// esse módulo é chamado de módulo raiz

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './models/product.model';
import { ProductController } from './controllers/product/product.controller';

// decorator
@Module({
  imports: [
    // esse módulo vai ler o arquivo .env(dotenv)
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      // quais entidades eu quero abilitar para o nest utilizar
      entities: [Product],
    }),
    // no forFeature eu coloco os que eu quero utilizar dentro desse módulo
    TypeOrmModule.forFeature([Product]),
  ],
  // tenho que definir os controllers
  controllers: [AppController, ProductController],
  // serviços da minha aplicação
  providers: [AppService],
})
export class AppModule {}
