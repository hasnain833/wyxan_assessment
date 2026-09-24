import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Person {
  @Prop({ required: true, unique: true, trim: true, index: true })
  name: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
