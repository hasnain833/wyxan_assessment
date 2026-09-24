import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SitesService } from './sites.service';
import { Site } from './schemas/site.schema';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get('search')
  search(@Query('q') q?: string) {
    return q?.trim() ? this.sitesService.search(q.trim()) : [];
  }

  @Get(':address')
  async findOne(@Param('address') address: string) {
    const site = await this.sitesService.findByAddress(address);
    if (!site) throw new NotFoundException(`Site with address "${address}" was not found.`);
    return site;
  }

  @Post()
  create(@Body() body: Site) {
    if (!body.address || !body.title || !body.body || !body.author) {
      throw new BadRequestException('Address, title, body, and author are all required.');
    }
    return this.sitesService.create(body);
  }

  @Get()
  findAll() {
    return this.sitesService.findAll();
  }
}
