import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    if (!name?.trim()) throw new BadRequestException('Person name is required.');
    return this.peopleService.create(name.trim());
  }
}
