// Require Links
const fs = require('fs')

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

        const reqBody = req.body;

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

    //"DELETE"
    app.delete("/api/notes/:id", (req, res) => {

      // console.log(req.params.id);
    // re-read the json file
    fs.readFile('./db/db.json', function(err, data){

        // reinstantiate parsed json
        const parseJSON = JSON.parse(data)

        // loop through existing data
        for(let i = 0; i < parseJSON.length; i++) {

            // if the uuid of the current index is the same as the uuid of the button being clicked
            if(parseJSON[i].id === req.params.id) {

                // remove the current index and adjust the array by one
                parseJSON.splice([i], 1);
            } 
    }

    // re-write file after splicing
    fs.writeFile("./db/db.json", JSON.stringify(parseJSON), "utf8", function(err, data) {
        if (err) throw err;   
    });
    });

    // send response
    res.send('complete')
});

};