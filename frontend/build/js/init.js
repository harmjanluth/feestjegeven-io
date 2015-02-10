define(["json!config", "models/location"], function(config, location) {
  var alias, path, places;
  path = window.location.pathname;
  if (config.urls.base_path) {
    if (window.location.href.indexOf(config.urls.base_path) > -1) {
      path = window.location.href.split(config.urls.base_path)[1];
    }
  }
  String.prototype.startsWith = function(str) {
    var value;
    value = this + "";
    return value.indexOf(str) > -1;
  };
  if (path === ("" || "/")) {
    places = require(["places"]);
  } else if (path.startsWith("/feestlocatie:")) {
    alias = path.split("/feestlocatie:").pop();
    location.get(alias);
  } else {
    alert(404);
  }
});
