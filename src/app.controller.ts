import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// dentro do decorator Controller eu posso passar o prefixo da rota(recurso)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // as rotas são criadas a partir de decorators
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
