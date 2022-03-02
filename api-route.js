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

        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    });
};