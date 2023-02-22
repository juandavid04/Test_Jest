import { Sequelize } from "sequelize";

const Conexion = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'prueba_postgis',
    port: 5432,
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