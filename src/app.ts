import express from 'express'
import { sequelize } from './databases/databases'


const app = express()

app.use(express.json())
app.disable('x-powered-by')

const PORT: number = 3000

app.listen(PORT, () => {
    sequelize.authenticate()
    console.log(`Server listen in http://localhost:${PORT}`)
})