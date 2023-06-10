import db from "./dbInitConnection.js";

export default (request, response, next) => {
    console.log("Db state: " + db.state);
    if (db.state === 'disconnected') {
        response.status(503).send("Service Unavailable");
    } else {
        response.locals.db = db;
        next();
    }
}