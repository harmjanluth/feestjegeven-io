var Schema, handle, mongoose;

mongoose = require("mongoose");

Schema = mongoose.Schema;

handle = require("./handle");

exports.handle = handle.call;
