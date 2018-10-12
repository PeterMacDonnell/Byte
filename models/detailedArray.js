const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const place = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  formatted_address: String,
  formatted_phone_number: String,
  price_level: String,
  rating: String,
  website: String,
  opening_hours: [{ type: String}],
  photos: [{ type: String}],
  reviews: [{ type: String}],
});

const Place = mongoose.model("Place", detailedArray);

module.exports = Place;