var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

//test route
app.all('/api/test', (req, res) => {
  console.log(`received ${req.method} to ${req.url}`);
  res.send('responding to api/test');
});

//set client directory as location of static files
app.use(express.static(path.join(__dirname, '../client')));

var port = 8080;

app.listen(port, () => {
  console.log('server listening on', port);
});
