import { Controller, Get, Post, Body, Query, BadRequestException } from '@nestjs/common';
import { VisitsService } from './visits.service';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get()
  find(@Query('person') person?: string, @Query('limit') limit?: string) {
    return this.visitsService.find(person?.trim(), Number(limit) || 100);
  }

  @Post()
  record(@Body() body: { person: string; address: string; method: string; timestamp?: string }) {
    if (!body.person || !body.address || !body.method) {
      throw new BadRequestException('Person, address, and method are all required.');
    }
    const { person, address, method, timestamp } = body;
    return this.visitsService.record({ person, address, method, timestamp: timestamp ? new Date(timestamp) : undefined });
  }
}
