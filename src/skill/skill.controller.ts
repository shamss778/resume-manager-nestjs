import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CrudController } from '../CRUD/crud.controller';
import { SkillEntity } from './entities/skill.entity';
import { CvService } from '../cv/cv.service';

@Controller('skill')
export class SkillController extends CrudController<SkillEntity> {
  constructor(private readonly skillService: SkillService) {
    super(skillService);
  }
}
