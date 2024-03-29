
// NPM package

var express = require("express");


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port for 
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points the server to "route" files.
 require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER - "starts" our server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});