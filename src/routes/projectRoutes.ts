import { Router, type Router as RouterType } from "express";
import { Project } from "../models/Project";
import { ProjectController } from "../controllers/projectControllers";

export default function projectRouter(): RouterType {
    const router = Router()

    const projectControllers = new ProjectController(Project)

    router.get('/', projectControllers.getAllProject)
    router.post('/', projectControllers.createProject)

    // router.get('/:id', projectControllers.getProject)
    // router.delete('/:id', projectControllers.deleteProject)
    // router.put('/:id', projectControllers.updateProject)
    
    return router
}