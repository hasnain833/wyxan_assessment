import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Visit {
  @Prop({ required: true, trim: true })
  person: string;

  @Prop({ required: true, trim: true, lowercase: true })
  address: string;

  @Prop({ required: true, trim: true, enum: ['typed', 'link', 'back', 'forward', 'history', 'search'] })
  method: string;

  @Prop({ required: true, default: Date.now, index: true })
  timestamp: Date;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);

VisitSchema.index({ person: 1, timestamp: -1 });
