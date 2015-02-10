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
  return LocationModel.collection.geoNear(query.latlng[0], query.latlng[1], {
    spherical: true,
    maxDistance: query.distance / 6371,
    distanceMultiplier: 6371,
    query: filters
  }, function(err, docs) {
    if (err) {
      return log.debug("[Error.. querying]", err);
    } else {
      return callback(docs);
    }
  });
};

exports.get = function(alias, callback) {
  if (alias) {
    return LocationModel.findOne({
      alias: alias
    }, function(err, results) {
      return callback(results);
    });
  }
};
