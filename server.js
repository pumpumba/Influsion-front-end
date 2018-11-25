var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname));
//This file is only intended for production use. It directs all routing to the same file, 
//which is required for a Single Page Application. In this case created with React-Router
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

//create a server object:
console.log("This server was started on port", PORT, " inside the container");
app.listen(PORT); //the server object listens on port 8080