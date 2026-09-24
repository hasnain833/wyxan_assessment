import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from '../sites/schemas/site.schema';
import { Person } from '../people/schemas/person.schema';
import { Visit } from '../visits/schemas/visit.schema';
import { SEED_SITES } from './data/sites.data';
import { SEED_PEOPLE } from './data/people.data';
import { SEED_VISITS } from './data/visits.data';
import { memoryServer } from '../database.config';

// Upsert every doc by its natural key, so re-running never duplicates.
const upserts = <T>(docs: T[], key: (d: T) => object) =>
  docs.map((d) => ({ updateOne: { filter: key(d), update: { $set: d }, upsert: true } }));

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectModel(Site.name) private readonly siteModel: Model<Site>,
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
    @InjectModel(Visit.name) private readonly visitModel: Model<Visit>,
  ) {}

  // The in-memory DB starts empty on every boot; persistent DBs are seeded explicitly.
  async onApplicationBootstrap() {
    if (memoryServer) await this.runSeed();
  }

  async runSeed() {
    const sites = SEED_SITES.map((s) => ({ ...s, address: s.address.toLowerCase() }));
    const visits = SEED_VISITS.map((v) => ({ ...v, address: v.address.toLowerCase() }));
    await this.siteModel.bulkWrite(upserts(sites, (s) => ({ address: s.address })));
    await this.personModel.bulkWrite(upserts(SEED_PEOPLE, (p) => ({ name: p.name })));
    await this.visitModel.bulkWrite(
      upserts(visits, (v) => ({ person: v.person, address: v.address, timestamp: v.timestamp })),
    );
    return {
      success: true,
      sitesCount: sites.length,
      peopleCount: SEED_PEOPLE.length,
      visitsCount: visits.length,
    };
  }
}
