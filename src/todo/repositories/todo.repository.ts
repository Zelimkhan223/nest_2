import { Injectable } from '@nestjs/common'; 
import { Task } from '../utils/interfaces/task.interface';
import * as fs from 'fs/promises'

@Injectable() 
export class TodoRepository { 

    async addTask(task: Task) {
        const data = await fs.readFile('./task.json' , { encoding: "utf8" });
        const converted  = JSON.parse(data);
        converted.push(task);
        const jconConverted = JSON.stringify(converted, null, 2);

    }

    deleteTask(id: number) {
        

    }

    updateTask(task: Task) {

    }
 
}