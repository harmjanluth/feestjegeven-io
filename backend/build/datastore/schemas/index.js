var Schema, location, mongoose;

mongoose = require("mongoose");

Schema = mongoose.Schema;

location = require("./location");

exports.location = location.call;
