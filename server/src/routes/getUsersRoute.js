
export default (request, respons, next) => {
    const queryRequest = "select * from pracownicy;";
    respons.locals.db.query(queryRequest, (err, data) => {
        if (err) throw err;
        respons.json(data)
    });

}