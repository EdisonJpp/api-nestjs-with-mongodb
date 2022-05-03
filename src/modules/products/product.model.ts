import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product {
  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  title: string;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  description: string;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
