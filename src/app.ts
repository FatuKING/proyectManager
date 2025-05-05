import express from 'express'
import { sequelize } from './databases/databases.ts'
import './models/User.ts'
import './models/Task.ts'
import './models/Project.ts'


const app = express()

app.use(express.json())
app.disable('x-powered-by')

const PORT: number = 3000

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