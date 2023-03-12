// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date",  (req, res) => {
  var data = req.params.date;
  var convertToDate = new Date(data);
  var unix;
  console.log(convertToDate);
  if(convertToDate !='Invalid Date')
  {
    unix = Math.floor(convertToDate.getTime());
  }
  else{
    var convertToInt = parseInt(data);
    unix= convertToInt;
    convertToDate= new Date(convertToInt)
  }
  // Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT"
  res.json({unix:unix , "utc": convertToDate.toUTCString()})
 });





var port= process.env.PORT || 7000;
// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
