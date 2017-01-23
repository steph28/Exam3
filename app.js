require('./api/data/db.js');
var express    = require('express')
var path       = require('path')
var bodyParser = require('body-parser')
var routes = require ('./api/routes')

var app = express();

// Define the port to run on
app.set('port',3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//routes
app.use('/api',routes);

// Listen for requests
var server = app.listen(app.get('port'),function(){
  console.log('Express server listening on port ' + server.address().port);
});
