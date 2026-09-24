import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SitesModule } from './sites/sites.module';
import { PeopleModule } from './people/people.module';
import { VisitsModule } from './visits/visits.module';
import { SeedModule } from './seed/seed.module';
import { getMongoUri } from './database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({ uri: await getMongoUri() }),
    }),
    SitesModule,
    PeopleModule,
    VisitsModule,
    SeedModule,
  ],
})
export class AppModule {}
