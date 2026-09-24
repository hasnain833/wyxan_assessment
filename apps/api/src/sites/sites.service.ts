import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from './schemas/site.schema';

@Injectable()
export class SitesService {
  constructor(@InjectModel(Site.name) private readonly siteModel: Model<Site>) {}

  findByAddress(address: string) {
    return this.siteModel.findOne({ address: address.trim().toLowerCase() }).exec();
  }

  async search(query: string) {
    // Full-text search ranked by score; fall back to substring match for partial words.
    const hits = await this.siteModel
      .find({ $text: { $search: query } }, { score: { $meta: 'textScore' } })
      .sort({ score: { $meta: 'textScore' } })
      .limit(20)
      .exec();
    if (hits.length) return hits;

    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    return this.siteModel
      .find({ $or: [{ address: regex }, { title: regex }, { body: regex }, { author: regex }] })
      .limit(20)
      .exec();
  }

  async create(site: Site) {
    try {
      // Schema lowercases/trims the address; its unique index rejects duplicates.
      return await this.siteModel.create(site);
    } catch (err: any) {
      if (err?.code === 11000) {
        throw new ConflictException(`Site with address "${site.address.trim().toLowerCase()}" already exists`);
      }
      throw err;
    }
  }

  findAll() {
    return this.siteModel.find().sort({ address: 1 }).exec();
  }
}
