var data =require('../data.json')['group'];

exports.viewItem = function(req, res){
	   var name = req.params.name;
    var price, size, condition, color;

  for(var i = 0,len=data.length; i<len; i++) //0 or 1
  {
    for(var j = 0, len2 = data[i]['item'].length; j<len2; j++)
    {
      if(data[i]['item'][j]['name'] === name)
      {
        price = data[i]['item'][j]['price'];
        size =  data[i]['item'][j]['size'];
        condition = data[i]['item'][j]['condition'];
        color = data[i]['item'][j]['color'];
        imageURL = data[i]['item'][j]['imageURL'];
      }
    }

  }

	res.render('itemdetail', {
    'itemName' : name,
    'price' : price,
    'size' : size,
    'condition' : condition,
    'color': color,
    'imageURL' : imageURL
	});
};
