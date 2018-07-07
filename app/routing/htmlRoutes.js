// TODO: INCLUDE 2 ROUTES
// a GET route to '/survey'- displays survey page
// a default catch-all route displays home.html
var path = require("path");

module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};