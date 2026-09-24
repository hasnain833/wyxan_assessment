import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Site {
  @Prop({ required: true, unique: true, trim: true, lowercase: true, index: true })
  address: string;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  body: string;

  @Prop({ required: true, trim: true })
  author: string;
}

export const SiteSchema = SchemaFactory.createForClass(Site);

// Full-text search index on title and body
SiteSchema.index({ title: 'text', body: 'text' });
