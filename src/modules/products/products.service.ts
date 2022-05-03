import { Model } from 'mongoose';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { AddProductDto } from './dto/add-product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('product') private readonly productModel: Model<Product>,
  ) {}

  insertProduct = async (product: AddProductDto): Promise<Product> =>
    new this.productModel(product).save();

  getProducts() {
    return this.productModel.find();
  }

  async getSingleProduct(id: string) {
    const res = await this.productModel.findById(id);
    if (!res) throw new NotFoundException('the product not found');
    return res;
  }

  async updateProduct(id: string, product: Product) {
    await this.productModel.findByIdAndUpdate(id, product);
    return { id };
  }

  async deleteProduct(productId: string) {
    const res = await this.productModel.findByIdAndDelete(productId);
    if (!res) throw new NotFoundException('not found the product to remove');
    return res;
  }
}
