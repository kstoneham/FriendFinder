var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        console.log("New Friend: " + req.body.name);
        var newFriend = req.body;
        var totalDifference = 0;
        var currentDifference = 100;
        // variable needed for end result of best match chosen
        var endResult;
        for (var i = 0; i < friends.length; i++){
            for (var j = 0; j < newFriend.scores.length; j++){
                totalDifference += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
            }
            if (totalDifference < currentDifference){
                endResult = friends[i];
                currentDifference = totalDifference;
                console.log("Total Difference between closest match: " + totalDifference);
            }
        }
        // I gave up right about here.  I need to get a modal to display the best match, which currently isn't working and I can't get the logic 
        // right.
        console.log("Best Match:", endResult);
        friends.push(newFriend);


        res.json(endResult);
    });
};