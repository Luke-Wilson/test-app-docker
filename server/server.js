var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var request = require('request');

var API_KEY = require('./config/config.js').API_KEY;

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

//test route
app.all('/api/test', (req, res) => {
  console.log(`received ${req.method} to ${req.url}`);
  res.send('responding to api/test');
});

app.get('/api/beers/:id', (req, res) => {
  request(`http://api.brewerydb.com/v2/beers?key=${API_KEY}&glasswareId=${req.params.id}`,
    function(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      res.send(response);
    }
  );
});

app.get('/api/glassware', (req, res) => {
  request(`http://api.brewerydb.com/v2/glassware?key=${API_KEY}`,
    function(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      res.send(response);
    }
  );
});

app.get('/api/random', (req, res) => {
  request(`http://api.brewerydb.com/v2/beer/random?key=${API_KEY}`,
    function(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      res.send(response);
    }
  );
});



//set client directory as location of static files
app.use(express.static(path.join(__dirname, '../client')));

var port = 8080;

app.listen(port, () => {
  console.log('server listening on', port);
});
