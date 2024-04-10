import { Controller, Get, Param, Res } from '@nestjs/common';
import { ProductsService } from '../../app.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id') // Dynamic route parameter with name 'id'
  async getProductById(@Param('id') id: string, @Res() res): Promise<any> {
    const product = await this.productsService.findOne(id);
    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
}