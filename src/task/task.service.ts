import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepositoty: Repository<Task>
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepositoty.save(createTaskDto);
  }

  async findAll() {
    return await this.taskRepositoty.find();
  }

  async findOne(id: number) {
    return await this.taskRepositoty.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepositoty.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.taskRepositoty.delete(id);
  }
}
