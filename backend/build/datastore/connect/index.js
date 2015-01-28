var mongo, mongoose, uristring;

mongoose = require("mongoose");

mongo = require("mongodb");

uristring = process.env.MONGOLAB_URI || "mongodb://localhost/golden-slumbers";

mongoose.connect(uristring, function(error, response) {
  if (error) {
    return log.error("error connecting to: " + uristring + ": " + error);
  } else {
    return log.info("datastore connected to: " + uristring);
  }
});
