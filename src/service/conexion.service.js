import { Sequelize } from "sequelize";

const Conexion = new Sequelize({
    host: process.env.HOST_DB,
    dialect: 'postgres',
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB,
    schema: 'public',
    define:{
        schema:'public'
    }
});

Conexion.authenticate()
.then(()=>{
    console.log('Se conecto correctamente.');
})
.catch(()=>{
    console.error('Hubo un fallo en la conexión.')
})

export default Conexion;