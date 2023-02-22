import { DataTypes } from "sequelize";
import Conexion from "../service/conexion.service.js";

const MunColombiaModel = Conexion.define('mun_colombia',{
    gid:{
        type:DataTypes.NUMBER,
        primaryKey: true
    },
    area:{
        type: DataTypes.NUMBER
    },
    perimeter:{
        type: DataTypes.NUMBER
    },
    dpto:{
        type: DataTypes.STRING
    },
    nombre_dpt:{
        type:DataTypes.STRING
    },
    mpio:{
        type:DataTypes.STRING
    },
    nombre_mpi:{
        type:DataTypes.STRING
    },
    nombre_cab:{
        type:DataTypes.STRING
    },
    mpios:{
        type:DataTypes.STRING
    },
    hectares:{
        type:DataTypes.NUMBER
    },
    geom:{
        type:DataTypes.GEOMETRY('GEOMETRY',4326)
    }
},
{
    schema:'geo',
    timestamps: false,
    freezeTableName: true,
    tableName: 'mun_colombia'
})

export default MunColombiaModel;