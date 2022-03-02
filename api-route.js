// Require Links
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

module.exports = app => {

    //"GET"
    app.get("/api/notes", (req, res) => {

        fs.readFile("./db/db.json", (err, data) => {

            if (err) throw (err);
            const parseJSON = JSON.parse(data)

            res.send(parseJSON)
        })
    });

    //"POST"
    app.post("/api/notes", (req, res) => {
        //allows for you to click on the notes you have created. 
        const reqBody = req.body;
        reqBody.id =uuidv4();

        fs.readFile('./db/db.json', (err, data) => {

            const parseJSON = JSON.parse(data)

            parseJSON.push(reqBody)

            fs.writeFile("./db/db.json", JSON.stringify(parseJSON), "utf8", (err, data) => {
                if (err) throw (err);
            });
        });

        // Response
        res.send("Ready. Set. POST")
    });

    //"DELETE" Cant get my delete to work.
    // app.delete("/api/notes/:id", (req, res) => {

    // fs.readFile('./db/db.json', function(err, data){

    //     const parseJSON = JSON.parse(data)
    //     for(let i = 0; i < parseJSON.length; i++) {

    //         if(parseJSON[i].id === req.params.id) {
    //             parseJSON.splice([i], 1);
    //         } 
    // }

    // fs.writeFile("./db/db.json", JSON.stringify(parseJSON), "utf8", function(err, data) {
    //     if (err) throw err;   
    // });
    // });

    // // send response
    // res.send('complete')
};