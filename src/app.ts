import './models/User.ts'
import './models/Task.ts'
import './models/Project.ts'
import express from 'express'
import { sequelize } from './databases/databases.ts'
import { projectRouter } from './routes/projectRoutes.ts'
import { userRouter } from './routes/userRoutes.ts'
import { taskRouter } from './routes/taskRoutes.ts'

const app = express()

app.use(express.json())
app.disable('x-powered-by')

app.get('/', )
app.use('/user', userRouter())
app.use('/project', projectRouter())
app.use('/task', taskRouter())

const PORT: number = Number(process.env.PORT) || 3000

;(async () => {
    try {
      await sequelize.authenticate()
      console.log('Conexión a la base de datos establecida.')
     
      await sequelize.sync()

      app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`)
      })
    } catch (error) {
      console.error(`Error al iniciar la app: ${error}`)
    }
  })()