import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class User {
  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  name?: string;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  lastName?: string;

  @Prop({
    required: true,
    unique: true,
  })
  @ApiProperty({ type: String })
  email?: string;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  username?: string;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: Number })
  phone?: number;

  @Prop({
    required: true,
  })
  @ApiProperty({ type: String })
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
