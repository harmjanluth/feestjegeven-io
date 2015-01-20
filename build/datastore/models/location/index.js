var LocationModel, mongo, mongoose, schemas, utils;

mongoose = require("mongoose");

mongo = require("mongodb");

schemas = roquire("datastore/schemas");

utils = roquire("utils");

LocationModel = mongoose.model("Location", schemas.location);

exports.find = function(latlng, callback) {
  log.trace(latlng);
  return LocationModel.geoNear(latlng, {
    maxDistance: 0.1 / 1000,
    spherical: true
  }, function(err, results, stats) {
    console.log("AA", results);
    return callback(results);
  });
};
