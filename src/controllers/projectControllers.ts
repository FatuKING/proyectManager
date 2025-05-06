import { Request, Response } from "express";
import { send } from "process";

export class ProjectController {
    private projectModel: any

    constructor(projectModel: any) {
        this.projectModel = projectModel
    }

     getAllProject = async (req: Request, res: Response): Promise<void> => {
        const projects = await this.projectModel.findAll()

        res.status(200).json(projects)
     }
    
    // getProject = async (req: Request, res: Response): Promise<void> => {
        
    // }

    // deleteProject = async (req: Request, res: Response): Promise<void> => {
    //     const { id } = req.body

    //     await this.projectModel.delete({

    //     })



    // }

    // updateProject = async (req: Request, res: Response): Promise<void> => {

    // }

    createProject = async (req: Request, res: Response): Promise<void> => {
        const {name, description, startDate, finalDate, priority} = req.body

        await this.projectModel.create({
            name,
            description,
            startDate,
            finalDate,
            priority
        })

        res.status(202).send("Nuevo proyecto creado")
    }
}