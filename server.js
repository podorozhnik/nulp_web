/**
 * Created by Antonina on 04.12.2017.
 */

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, function(err, database) {
    if (err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, function(){
        console.log('We are live on ' + port);
    });
});

