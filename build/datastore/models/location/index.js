var LocationModel, mongo, mongoose, schemas, utils;

mongoose = require("mongoose");

mongo = require("mongodb");

schemas = roquire("datastore/schemas");

utils = roquire("utils");

LocationModel = mongoose.model("Location", schemas.location);

exports.find = function(query, callback) {
  var filters;
  query.features = ["Bereikbaar per boot", "Invalidentoegankelijk", "Tuin"];
  filters = {};
  if (query.pax) {
    filters.maximum_pax = {
      $gte: query.pax
    };
    filters.minimum_pax = {
      $lte: query.pax
    };
  }
  if (query.features) {
    filters.features = {
      $all: query.features
    };
  }
  return LocationModel.geoNear(query.latlng, {
    distanceMultiplier: 6371,
    maxDistance: query.distance / 6371,
    spherical: true,
    query: filters
  }, function(err, results, stats) {
    return callback(results);
  });
};
