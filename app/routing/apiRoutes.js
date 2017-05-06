
var friends = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
      
      var min_score = 1000;
      var match_index = -1;
      var ego_scores = req.body.scores;
      
      for (var friend of friends){
          if (friend.name !== req.body.name){
              var match_score = 0.0;

              for(var i = 0; i < friend.scores.length; i++){
                  match_score += Math.abs(friend.scores[i] - ego_scores[i]);
              }

              if (min_score > match_score){
                  min_score == match_score;
                  match_index = friends.indexOf(friend);
              }
          }
      }
      
      res.json(friends[match_index]);
      
  });

};