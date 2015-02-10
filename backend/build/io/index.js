var datastore, io, utils;

datastore = roquire("datastore");

utils = roquire("utils");

io = null;

exports.init = function(server) {
  io = require("socket.io").listen(server);
  return io.on("connection", function(socket) {
    socket.emit("ready", {});
    socket.on("query", function(q) {
      log.debug(q);
      return datastore.find(q, function(result) {
        return socket.emit("result", result);
      });
    });
    return socket.on("getLocation", function(alias) {
      return datastore.getLocation(alias, function(result) {
        return socket.emit("result", result);
      });
    });
  });
};
