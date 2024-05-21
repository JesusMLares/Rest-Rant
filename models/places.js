const mongoose = require("mongoose");

const { Schema } = mongoose 

// Place Schema
const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/green.jpg' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, "Surely not that old!"],
    max: [new Date().getFullYear(), "Hey, this year is in the future!"],
  },
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}!`;
};


const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
