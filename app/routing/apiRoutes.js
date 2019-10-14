var friendsData = require("../data/friends");
    console.log(friendsData)
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.

    app.post("/api/friends", function(req, res) {
    //  
     
    });
  
    // // ---------------------------------------------------------------------------
    // // I added this below code so you could clear out the table while working with the functionality.
    // // Don"t worry about it!
  
  };
  