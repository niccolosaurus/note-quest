// Require Links
const fs = require('fs')

module.exports = app => {

    //"GET"
    app.get("/api/notes", (req, res) => {

        fs.readFile("./db/db.json", (err, data) => {

            if (err) throw (err);
            let parseJSON = JSON.parse(data)

            res.send(parseJSON)
        })
    });

    //"POST"
    app.post("/api/notes", (req, res) => {

        let reqBody = req.body;

        fs.readFile('./db/db.json', (err, data) => {

            let parseJSON = JSON.parse(data)

            parseJSON.push(reqBody)

            fs.writeFile("./db/db.json", JSON.stringify(parseJSON), "utf8", (err, data) => {
                if (err) throw (err);
            });
        });

        // Response
        res.send("Ready. Set. POST")
    });

    //"DELETE"
    app.delete("/api/notes/:id", (req, res) => {

        fs.readFile('./db/db.json', (err, data) => {

            let parseJSON = JSON.parse(data)

            for (let i = 0; i < parseJSON.length; i++) {

                if (parseJSON[i].id === req.params.id) {

                    parseJSON.splice([i], 1);
                }
            }

            fs.writeFile("./db/db.json", JSON.stringify(parseJSON), "utf8", (err, data) => {
                if (err) throw err;
            });
        });

        // Response
        res.send('Completed')
    });
};