var data = require('../wishlist.json');

exports.view = function(req, res){
	res.render('wishlist', data);
};
