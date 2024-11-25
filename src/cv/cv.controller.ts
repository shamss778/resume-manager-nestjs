import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CvService } from './cv.service';
import { CrudController } from '../CRUD/crud.controller';
import { CvEntity } from './entities/cv.entity';

@Controller('cv')
export class CvController extends CrudController<CvEntity> {
  constructor(private readonly cvService: CvService) {
    super(cvService);
  }
  }

