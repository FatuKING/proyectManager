import { Request, Response } from "express";

export class TaskController {
    private taskModel: any

    constructor(taskModel: any) {
        this.taskModel = taskModel
    }
    
    // deleteTask = async (req: Request, res: Response): Promise<void> => {
        
    // }

    // updateTask = async (req: Request, res: Response): Promise<void> => {

    // }

    // createTask = async (req: Request, res: Response): Promise<void> => {

    // }
}