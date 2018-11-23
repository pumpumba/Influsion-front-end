var express = require("express");
var httpProxy = require("http-proxy");

var app = express();
var proxy = httpProxy.createProxyServer();

//This file is only intended for production use. It directs all routing to the same file, 
//which is required for a Single Page Application. In this case create with React-Router
app.all("/*", function (req, res) {
  console.log("This server was started using a httpProxy to server a Single Page Application");
  proxy.web(req, res, { target: "index.html" });
});

//create a server object:
app.listen(8080); //the server object listens on port 8080