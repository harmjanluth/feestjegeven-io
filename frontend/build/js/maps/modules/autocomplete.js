define(["gmaps", "socket"], function(gmaps, socket) {
  var init, module;
  module = {
    set: function(id) {
      var autocomplete, input;
      input = document.getElementById(id);
      autocomplete = new gmaps.maps.places.Autocomplete(input, {
        types: ["geocode"]
      });
      return gmaps.maps.event.addListener(autocomplete, 'place_changed', function() {
        var lat, lng, place;
        place = autocomplete.getPlace();
        lat = place.geometry.location.lat();
        lng = place.geometry.location.lng();
        return socket.query({
          latlng: [lng, lat],
          distance: document.getElementById("distance").value || 999
        });
      });
    }
  };
  init = function(options) {
    return module;
  };
  return init();
});
