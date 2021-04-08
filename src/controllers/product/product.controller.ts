import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  @Post()
  store(@Body() body) {
    const product = this.productRepo.create(body);
    return this.productRepo.save(product);
  }
}
