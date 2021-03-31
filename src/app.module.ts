// todo o desenvolvimento no nest é paltado por módulos, tudo o que eu tiver na
// aplicação precisa estár registrado em um módulo para que esse artefato seja
// usado pelo próprio nest e seja usado em outros módulos
// esse módulo é chamado de módulo raiz

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// decorator
@Module({
  imports: [],
  // tenho que definir os controllers
  controllers: [AppController],
  // serviços da minha aplicação
  providers: [AppService],
})
export class AppModule {}
