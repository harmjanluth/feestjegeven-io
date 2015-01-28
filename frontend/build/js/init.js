define(["json!config"], function(config) {
  var path, places;
  console.log(window.location.href);
  console.log(config.urls.base_path);
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
    alert(200);
  } else {
    alert(404);
  }
});
