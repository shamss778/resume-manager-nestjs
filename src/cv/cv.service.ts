import { Injectable } from '@nestjs/common';
import { CrudService } from '../CRUD/crud.service';
import { CvEntity } from './entities/cv.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class CvService extends CrudService<CvEntity> {
  constructor(
    @InjectRepository(CvEntity)
    private readonly cvRepository: Repository<CvEntity>,
  ) {
    super(cvRepository);
  }
}
