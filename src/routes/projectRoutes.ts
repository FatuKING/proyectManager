import { Router, type Router as RouterType } from "express";
import { Project } from "../models/Project";
import { ProjectController } from "../controllers/projectControllers";

export function projectRouter(): RouterType {
    const router = Router()

    const projectModel = Project
    const projectControllers = new ProjectController(projectModel)

    router.get('/', projectControllers.getAllProject)
    router.post('/', projectControllers.createProject)

    router.get('/:id', projectControllers.getProject)
    router.delete('/:id', projectControllers.deleteProject)
    router.put('/:id', projectControllers.updateProject)
    
    return router
}