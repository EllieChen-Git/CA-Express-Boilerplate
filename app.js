const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const expressSession = require("express-session");
const app = express();

//Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Express Session
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

//Body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Morgan
app.use(morgan("combined"));

app.use(require("./routes"));

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;