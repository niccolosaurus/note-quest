// Require Links
const express = require("express");

//Linking the server
//3001 is th one we used constantly in class, I don't belive it matters though
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Routing for Files
require("./api-route")(app);
require("./html-route")(app);


//Listener Function
app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT);
});