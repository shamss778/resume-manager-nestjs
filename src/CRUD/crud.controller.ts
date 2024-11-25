import { Controller, Get, Post, Body, Param, Delete, Patch, Put } from '@nestjs/common';
import { CrudEntity } from './crud.entity';
import { ICrudService } from './Icrud.service';

export class CrudController<T extends CrudEntity> {
  constructor(private readonly ICrudService: ICrudService<T>) {}

  @Get()
	async findAll(): Promise<T[]> {
	  return this.ICrudService.getAll()
	}

	@Get(':id')
	async findById(@Param('id') id: number): Promise<T> {
	  return this.ICrudService.get(id)
	}

	@Post()
	async create(@Body() entity: T): Promise<number> {
		return this.ICrudService.create(entity);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
	  this.ICrudService.delete(id);
	}

	@Put()
	async update(@Body() entity: T): Promise<T> {
	  return this.ICrudService.update(entity);
	}

}
