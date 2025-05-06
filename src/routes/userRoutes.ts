import { Router, type Router as RouterType } from "express";
import { UserController } from "../controllers/userControllers.ts";
import { User } from "../models/User.ts";

export function userRouter(): RouterType {
    const router = Router()

    // const userModel = User

    // const userControllers = new UserController(userModel)

    // router.post('/login', userControllers.loginUser)
    // router.post('/register', userControllers.registerUser)

    return router
}