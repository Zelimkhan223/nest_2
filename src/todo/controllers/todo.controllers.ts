import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Task } from '../utils/interfaces/task.interface';
import { TodoRepository } from '../repositories/todo.repository';

@Controller()
export class TodoController {

    constructor (
        private toDoRepository: TodoRepository
    ) {}

    @Post('./task')
    addTask(@Body() task: Task) {
        this.toDoRepository.addTask(task);
    }

    @Delete()
    deleteTask(id: number) {

    }

    @Put()
    updateTask(task: Task) {

    }

    @Get()
    getTask() {

    }
}