var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
    res.send('hello world')
});


app.listen(8888, function () {
    console.log('app is listening at port 3000');
});