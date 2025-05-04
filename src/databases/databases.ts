import { Sequelize } from "sequelize";
import 'dotenv/config'

export const sequelize: Sequelize = new Sequelize(
    process.env.DATABASE_NAME!, 
    process.env.DATABASE_USER!, 
    process.env.DATABASE_PASSWORD!, {
    host: 'localhost',
    dialect: 'postgres'
})