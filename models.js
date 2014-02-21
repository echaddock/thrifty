
var Mongoose = require('mongoose');


var WishlistSchema = new Mongoose.Schema({
  // fields are defined here
  "name" : String,
  "imageURL" : String
});

exports.Wishlist = Mongoose.model('Wishlist', WishlistSchema);


