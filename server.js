// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// accessing path module
var path=require('path');
// accessing multer module
var multer=require('multer');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(multer({
    dest:path.join(__dirname,'uploads/')

}).any());



// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload", function (request, response) {
  
  console.log(request.files[0].size)
  response.send({size:request.files[0].size})
  
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
