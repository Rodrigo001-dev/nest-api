// o nest implemente as ideias de arquitetura do Angular
// a aplicação começa aqui nesse arquivo

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // está criando uma instância da aplicação a partir da classe AppModule
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
