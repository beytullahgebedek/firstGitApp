var express = require('express');
var app = express();

app.use(express.static(__dirname +'/public'));

var ip = '127.0.0.1';
var port = 3000;

app.listen(port, ip);