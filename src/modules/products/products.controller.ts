import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { AddProductDto } from './dto/add-product.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiCreatedResponse({ type: Product, isArray: true })
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Post('/add')
  @ApiBody({ type: AddProductDto })
  @ApiCreatedResponse({
    description: 'add users',
    isArray: false,
    type: Product,
  })
  addProduct(@Body() Body: AddProductDto) {
    return this.productsService.insertProduct(Body);
  }

  @Get(':id/show')
  @ApiCreatedResponse({ type: Product })
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id/update')
  @ApiCreatedResponse({ type: Product })
  updateProduct(@Param('id') prodId: string, @Body() product: Product) {
    return this.productsService.updateProduct(prodId, product);
  }

  @Delete(':id/remove')
  @ApiCreatedResponse({ type: Product })
  removeProduct(@Param('id') prodId: string) {
    return this.productsService.deleteProduct(prodId);
  }
}
