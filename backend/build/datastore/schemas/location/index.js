var Schema, mongoose;

mongoose = require("mongoose");

Schema = mongoose.Schema;

exports.call = new Schema({
  name: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  photos: {
    type: Array,
    required: true
  },
  website: {
    type: String,
    required: false
  },
  logo: {
    type: String,
    required: false
  },
  brochure: {
    type: String,
    required: false
  },
  minimum_pax: {
    type: Number,
    required: true
  },
  maximum_pax: {
    type: Number,
    required: true
  },
  location_type: {
    type: String,
    required: false
  },
  features: {
    type: Array,
    required: false
  },
  loc: {
    type: [Number],
    index: "2dsphere",
    required: false
  },
  updated: {
    type: Date,
    "default": Date.now,
    required: true
  },
  created: {
    type: Date,
    "default": Date.now,
    required: true
  }
});
