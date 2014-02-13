var itemData = require('../data.json');

exports.viewItem = function(req, res){
	var name = req.params.name;
	console.log("The item name is: " + name);
	res.render('itemdetail', {
		'itemName' : name
	});
};
