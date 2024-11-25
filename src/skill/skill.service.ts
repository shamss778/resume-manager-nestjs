import { Injectable } from '@nestjs/common';
import { CrudService } from '../CRUD/crud.service';
import { SkillEntity } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService extends CrudService<SkillEntity> {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
  ) {
    super(skillRepository);
  }
}
