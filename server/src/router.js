import express  from "express";

import getUsersRoute from "./routes/getUsersRoute.js"
import dbCreateConnetion from "./middlewere/dbCheckConnetion.js";

const router = express.Router();

router.get("/users", dbCreateConnetion, getUsersRoute);

export default router;