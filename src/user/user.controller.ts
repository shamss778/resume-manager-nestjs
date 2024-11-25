import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CrudController } from '../CRUD/crud.controller';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController extends CrudController<UserEntity> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
