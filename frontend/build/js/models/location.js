define(["socket"], function(socket) {
  var init, module;
  module = {
    get: function(alias) {
      alias = "feestlocatie/" + alias;
      return socket.getLocation(alias);
    }
  };
  init = function(options) {
    return module;
  };
  return init();
});
