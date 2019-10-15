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
      console.log(req.body);
    //  will need a for loop to go loop through array of scores
      console.log(2 + 3)
      res.json({"test" : "test"})
    });
  
  
  };
  