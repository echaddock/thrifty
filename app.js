
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index'),
    browse = require('./routes/browse'),
    calendar = require('./routes/calendar'),
    findus = require('./routes/findus'),
    login = require('./routes/login'),
    wishlist = require('./routes/wishlist'),
    help = require('./routes/help'),
    itemdetail = require('./routes/itemdetail');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/browse', browse.view);
app.get('/findus', findus.view);
app.get('/calendar', calendar.view);
app.get('/wishlist', wishlist.view);
app.get('/help', help.view);
app.get('/login', login.view);
app.get('/itemdetail/:name', itemdetail.viewItem);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
