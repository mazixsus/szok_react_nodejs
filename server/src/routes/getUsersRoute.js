
export default (request, respons, next) => {
    const queryRequest = "select * from uzytkownicy limit 10;";
    respons.locals.db.query(queryRequest, (err, data) => {
        if (err) throw err;
        respons.json({"users": data})
    });

}