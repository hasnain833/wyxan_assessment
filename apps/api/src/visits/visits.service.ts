import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Visit } from './schemas/visit.schema';

@Injectable()
export class VisitsService {
  constructor(@InjectModel(Visit.name) private readonly visitModel: Model<Visit>) {}

  // Schema trims person/address, lowercases address, defaults timestamp to now.
  record(visit: Partial<Visit>) {
    return this.visitModel.create(visit);
  }

  find(person: string | undefined, limit: number) {
    return this.visitModel
      .find(person ? { person } : {})
      .sort({ timestamp: -1 })
      .limit(limit)
      .exec();
  }
}
