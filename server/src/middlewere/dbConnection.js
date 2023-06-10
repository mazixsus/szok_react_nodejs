import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "szok",
})

export default db;