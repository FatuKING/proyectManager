import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../databases/databases.ts";
import { Task } from "./Task.ts";

interface ProjectAttributes {
    id: string
    name: string
    description: string
    startDate: Date
    finalDate: Date
    priority: string
    status: boolean
  }
  
  interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id' | 'status'> {}
  
  export class Project extends Model<ProjectAttributes, ProjectCreationAttributes> implements ProjectAttributes {
    public id!: string
    public name!: string
    public description!: string
    public startDate!: Date
    public finalDate!: Date
    public priority!: string
    public status!: boolean
  }
  
  Project.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      finalDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      tableName: 'projects',
      modelName: 'Project'
    }
  )

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
     foreignKey: 'projectId',
     targetKey: 'id'
})