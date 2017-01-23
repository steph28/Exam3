var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
   },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  description: String,
  photos: [String],
  currency: String,
  //reviews : [reviewSchema],
  //rooms : [roomSchema],
});

var roomSchema = new mongoose.Schema({
  type: String,
  number: Number,
  description: String,
  photos: [String],
  price: Number
});

var reviewSchema = new mongoose.Schema({
  name: { type : String, required : true },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  review: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
});


mongoose.model('Hotel', hotelSchema, 'hotels');
