const http = require('http');
const hostName ="localhost";
const port = 5000;
const express = require('express');
const app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'assets')));
//Home page
app.get('/', function(req, res){
	console.log("Hello Khavya Seshadri!!!");
	res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.listen(port);
console.log("Web Service API application");