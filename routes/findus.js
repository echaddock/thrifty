var map = require('../map.json');
exports.view = function(req, res){
	res.render('findus', map);
};
