var models = require('../models');

//var data = require('../wishlist.json');

exports.view = function(req, res){

	models.Wishlist
	  .find()
	  .exec(renderWishlist);

    function renderWishlist(err, wishlist)
    {
       res.render('wishlist', {'wishlist' : wishlist});
    }
};

exports.addToWishlist = function(req, res) {
  var form_data = req.body;
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send

  var newPost = new models.Wishlist({ 
    "name": form_data['name'],
    "imageURL" : form_data['imageURL']
  });
  console.log(newPost);
  newPost.save(addCallback);

  function addCallback(err) { // this is a callback
    if(err) {console.log(err);}
    res.send();
   }

  }

exports.deleteFromWishlist = function(req, res) {
  var name = req.body['name'];

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Wishlist
    .find({"name": name})
    .remove()
    .exec(deleteCallback);

    function deleteCallback(err) {
    if(err) { console.log(err); }
    res.send();
     }
}