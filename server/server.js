var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//initialize the express server
var app = express();

//initialize the database
// mongoose.connect('mongodb://localhost/');

//configure our routing in seperate file.
// require('./config/routes.js')(app, express);

//parse body upon req
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8000));

//host the static files at client
app.use(express.static(__dirname + '/../client'));

//start server
app.listen(app.get('port'));
console.log('App listening on port 8000');

module.exports = app;
