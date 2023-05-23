import app from './app.js'
import * as dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT)

console.log('Variables de Entorno:')
console.log(process.env.HOST_DB)
console.log(process.env.USER_DB)
console.log(process.env.NAME_DB)
console.log(process.env.PASS_DB)
console.log(process.env.PORT_DB)
console.log(process.env.PORT)

console.log(`Server is running on port ${PORT}`)