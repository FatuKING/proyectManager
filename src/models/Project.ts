import { DataTypes } from "sequelize";
import { sequelize } from "../databases/databases";

sequelize.define('projects', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    userId: {

    },
    name: {
        type: DataTypes.STRING
    },
    descrition: {
        type: DataTypes.STRING
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {

    },
    priority: {
        type: DataTypes.ENUM
    }
    ,
    status: {
        type: DataTypes.BOOLEAN
    },
    fecha_creacion: {

    }
})