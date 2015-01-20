var LocationModel, mongo, mongoose, schemas, utils;

mongoose = require("mongoose");

mongo = require("mongodb");

schemas = roquire("datastore/schemas");

utils = roquire("utils");

LocationModel = mongoose.model("Location", schemas.location);

exports.find = function(query, callback) {
  return LocationModel.geoNear(query.latlng, {
    distanceMultiplier: 6371,
    maxDistance: query.distance / 637.1,
    spherical: true
  }, function(err, results, stats) {
    return callback(results);
  });
};
