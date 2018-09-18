const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;

var fs = require('fs');
var https = require('https');

var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync('encryption/recipes.csr');

var options = {
  key: key,
  cert: cert
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application.vnd.api+json' }));
//app.use(methodOverride());
app.use(express.static(__dirname + '/public'))

MongoClient.connect(db.url, function(err, client) {
  if(err) {
    console.log(err);
  }else{
    console.log("Connected to DB");
  }
  var db = client.db("recipes")
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
