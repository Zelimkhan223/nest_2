import { Module } from "@nestjs/common";
import { TodoController } from "./controllers/todo.controllers";
import { TodoRepository } from "./repositories/todo.repository";

@Module({
    imports: [],
    controllers: [TodoController],
    providers: [TodoRepository]
})
export class ToDoModule {}