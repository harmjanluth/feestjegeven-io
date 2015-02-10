define(["socketio", "views", "json!config"], function(io, views, config) {
  var init, module, socket;
  socket = null;
  module = {
    query: function(query) {
      return socket.emit("query", query);
    },
    getLocation: function(alias) {
      return socket.emit("getLocation", alias);
    }
  };
  init = function(options) {
    socket = io.connect(config.urls.socket);
    socket.on("ready", function() {
      return console.log("[socket initialized..]");
    });
    socket.on("result", function(data) {
      console.log("RESULT", data);
      return views.showSearchResults(data);
    });
    return module;
  };
  return init();
});
