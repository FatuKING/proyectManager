import { Router, type Router as RouterType } from "express";
import { Task } from "../models/Task";
import { TaskController } from "../controllers/taskControllers";

export function taskRouter(): RouterType {
    const router = Router()

    // const taskModel = Task
    // const taskControllers = new TaskController(taskModel)

    // router.post('/', taskControllers.createTask)

    // router.put('/:id', taskControllers.updateTask)
    // router.delete('/:id', taskControllers.deleteTask)

    return router
}