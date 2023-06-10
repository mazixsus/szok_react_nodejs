import express from "express";
import cors from "cors";

import "./middlewere/configEnv.js";
import db from "./middlewere/dbInitConnection.js";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db.connect((err) => {
  if (err) throw err;
  app.listen(8080);
  console.log("Connected");
});


