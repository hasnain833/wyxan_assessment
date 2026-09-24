import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { SitesModule } from '../sites/sites.module';
import { PeopleModule } from '../people/people.module';
import { VisitsModule } from '../visits/visits.module';

@Module({
  imports: [SitesModule, PeopleModule, VisitsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
