var express = require('express');
var colors = require('colors');
var app = express();
var pinger = require('./pinger.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  pinger({
    ratePerMin: 30,
    host: 'http://prod-help-api.herokuapp.com',
    endpoints: [
        'GET /v1.0/restrictions?auth=:id',
        'GET /v1.0/outages?auth=:id',
        'GET /v1.1/users/:id',
        'GET /v1.1/restrictions?auth=:id',
        'GET /v1.1/outages?auth=:id',
        'GET /v1.2/users/:id',
        'GET /v1.2/restrictions?auth=:id',
        'GET /v1.2/outages?auth=:id'
    ],
    token: ':token'
  });
});
