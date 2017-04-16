const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//Parse incoming body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.use(function (req, res, next) {
  console.log('Request of type: ' + req.method + ', to: '+req.url);
  next();
});

app.listen(port, () => {
  console.log('Listening on ' + port);
});
