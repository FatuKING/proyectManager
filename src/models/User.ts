import { DataTypes } from "sequelize";
import { sequelize } from "../databases/databases";

sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
    },
    fecha_creacion: {
        type: DataTypes.DATE
    }
})