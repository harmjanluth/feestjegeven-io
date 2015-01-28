var datastore, io, utils;

datastore = roquire("datastore");

utils = roquire("utils");

io = null;

exports.init = function(server) {
  io = require("socket.io").listen(server);
  return io.on("connection", function(socket) {
    socket.emit("ready", {});
    return socket.on("query", function(q) {
      log.debug(q);
      q.distance = q.distance || 1;
      return datastore.find(q, function(result) {
        return socket.emit("result", result);
      });
    });
  });
};
