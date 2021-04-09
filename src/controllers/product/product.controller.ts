import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  @Get()
  index() {
    return this.productRepo.find();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.productRepo.findOneOrFail(id);
  }

  @Post()
  store(@Body() body) {
    const product = this.productRepo.create(body);
    return this.productRepo.save(product);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body) {
    await this.productRepo.findOneOrFail(id);
    // dentro do productRepo.update eu passo 2 parâmetros, o primeiro é o
    // critério que ele vai buscar para fazer a atualização eu eu passo o body
    // como segundo parâmetro com os dados que vão ser alterados
    this.productRepo.update({ id: +id }, body);

    return await this.productRepo.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    await this.productRepo.findOneOrFail(id);
    this.productRepo.delete(id);
  }
}
