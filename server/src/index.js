import express from "express";
import cors from "cors";

import "./middlewere/configEnv.js";
import db from "./middlewere/dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json())

db.connect((err) => {
    if (err) throw err;
    app.listen(8080);
    console.log("Connected");
})

const queryRequest = "select * from pracownicy;"; 
db.query(queryRequest, (err, data) => {
    if (err) throw err;
    console.log(data);
})
