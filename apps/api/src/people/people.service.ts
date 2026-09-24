import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './schemas/person.schema';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(Person.name) private readonly personModel: Model<Person>) {}

  findAll() {
    return this.personModel.find().sort({ name: 1 }).exec();
  }

  // Idempotent: returns the existing person if the name is taken.
  create(name: string) {
    return this.personModel.findOneAndUpdate({ name }, { name }, { upsert: true, new: true }).exec();
  }
}
