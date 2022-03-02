// Require Links
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

//Linking the server
//3001 is th one we used constantly in class, I don't belive it matters though
const PORT = process.env.PORT || 3001;
const app = express();
