requirejs.config({
  baseUrl: "js",
  shim: {
    "socketio": {
      exports: "io"
    }
  },
  paths: {
    async: "../lib/require-plugins/async",
    text: "../lib/require-plugins/text",
    json: "../lib/require-plugins/json",
    socketio: "../lib/socket",
    hogan: "../lib/hogan-3.0.1",
    dom: "../lib/uSelector.min.js",
    gmaps: "maps/gmaps",
    socket: "socket/index",
    places: "./maps/index",
    views: "./views/index",
    config: "../config"
  }
});

requirejs(["init"]);
