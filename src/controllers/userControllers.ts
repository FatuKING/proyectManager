import { Request, Response } from "express";

export class UserController {
    private userModel: any

    constructor(userModel: any) {
        this.userModel = userModel
    }
    
    // registerUser = async (req: Request, res: Response): Promise<void> => {
        
    // }

    // loginUser = async (req: Request, res: Response): Promise<void> => {

    // }
}