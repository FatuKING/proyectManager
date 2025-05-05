import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '../databases/databases.ts'

interface TaskAttributes {
  id: string
  title: string
  description: string
  status: boolean
  priority: string
  fecha_limit: Date
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id' | 'status'> {}

export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
  public id!: string
  public title!: string
  public description!: string
  public status!: boolean
  public priority!: string
  public fecha_limit!: Date
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_limit: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'tasks',
    modelName: 'Task'
  }
)
