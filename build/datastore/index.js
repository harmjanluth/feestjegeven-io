var connect, location;

connect = require("./connect");

location = require("./models/location");

exports.find = function(nid, callback) {
  return location.find(nid, function(data) {
    return log.trace(data);
  });
};
