var datastore, io, utils;

datastore = roquire("datastore");

utils = roquire("utils");

io = null;

exports.init = function(server) {
  io = require("socket.io").listen(server);
  io.on("connection", function(socket) {
    return socket.emit("ready", {});
  });
  return datastore.find([5.636742, 52.342202], function(data) {
    return console.log("DSAASDADS", data);
  });
};
