var app, base_directory, io, log4js, server, utils;

global.roquire = function(name) {
  return require(__dirname + "/" + name);
};

app = require("express")();

server = require("http").Server(app);

io = require("./io").init(server);

utils = require("./utils");

log4js = require("log4js");

global.log = log4js.getLogger();

base_directory = process.env.IS_HEROKU ? process.cwd() + "/build" : __dirname;

app.set("port", process.env.PORT || 5000).get("/", function(request, response) {
  return response.sendFile(__dirname + "/client.html");
});

server.listen(app.get("port"), function() {
  return log.info("app running on :" + app.get("port"));
});
