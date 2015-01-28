define(["gmaps", "maps/modules/index"], function(gmaps, functions) {
  var init, module;
  module = {
    getHello: function() {
      return console.log("Hello World");
    }
  };
  init = function(options) {
    var autocomplete;
    console.log("[maps initialized..]");
    autocomplete = functions.autocomplete.set("places-autocomplete");
    return module;
  };
  return gmaps.maps.event.addDomListener(window, 'load', init());
});
