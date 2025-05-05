import { Router, type Router as RouterType } from "express";

export function createRouter(): RouterType {
    const appRouter = Router()

    appRouter.get('/', )

    appRouter.get('/login', )
    appRouter.post('/register', )

    appRouter.get('/projects',)
    appRouter.get('/projects/:id',)
    appRouter.post('/projects',)
    appRouter.delete('/projects/:id',)
    appRouter.put('/projects/:id',)
    
    appRouter.post('/task',)
    appRouter.put('/task/:id',)
    appRouter.delete('/task/:id',)



    return appRouter
}