import { DataTypes } from "sequelize";
import { sequelize } from "../databases/databases";

sequelize.define('tasks', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    proyectId: {
        type: 
    },
    title: {
        type: DataTypes.SMALLINT
    },
    descrition: {
        type: DataTypes.TEXT
    },
    status: {
        type DataTypes.BOOLEAN
    }
})