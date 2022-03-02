// Require Links
const express = require("express");
const path = require("path");
const fs = require("fs");

//Linking the server
//3001 is th one we used constantly in class, I don't belive it matters though
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Routing for Files
require("./route/api-route")(app);
require("./route/html-route")(app);


//Listener Function
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});