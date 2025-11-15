import mysql2 from 'mysql2/promise';
import dotenv from "dotenv"

dotenv.config()

const pool = mysql2.createPool({
    host: 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
    
});


const connection = mysql2.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
})

pool.connect((error)=>{
  if (error) {
    console.error("error de conexion a la base de datos: ", error)
    return;
  }
  console.log("Conexion a la base da datos exitosa")
})

export default pool;


