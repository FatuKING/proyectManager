import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../databases/databases.ts'
import { Project } from './Project.ts'

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
)

User.hasMany(Project, {
  foreignKey: 'userId',
  sourceKey: 'id',
})

Project.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
})
