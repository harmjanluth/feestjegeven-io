define(["hogan", "text!../templates/searchResults.html"], function(hogan, searchResultsTpl) {
  var init, module;
  module = {
    showSearchResults: function(data) {
      var output, template;
      template = Hogan.compile(searchResultsTpl);
      output = template.render({
        locations: data
      });
      return document.getElementById("result").innerHTML = output;
    }
  };
  init = function(options) {
    return module;
  };
  return init();
});
