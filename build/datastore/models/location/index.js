var LocationModel, mongo, mongoose, schemas, utils;

mongoose = require("mongoose");

mongo = require("mongodb");

schemas = roquire("datastore/schemas");

utils = roquire("utils");

LocationModel = mongoose.model("Location", schemas.location);

exports.find = function(latlng, callback) {
  return LocationModel.geoNear(latlng, {
    maxDistance: 300,
    spherical: true
  }, function(err, results, stats) {
    return console.log(results);
  });
};
