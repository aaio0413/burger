const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// Set Handlebars.
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;


//express config setting
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const burgerRoutes = require("./controllers/burgers_controller.js");
app.use(burgerRoutes);

// const publicPath = path.join(__dirname, '../views');
// app.use('/', express.static(publicPath));








app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

