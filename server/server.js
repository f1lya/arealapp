const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const app = express();
const cors = require('cors')

const port = 3000;
app.use(express.json());
app.use(cors())
MongoClient.connect(db.url, (err, client) => {
    const db = client.db('myFirstDatabase');
    if (err) return console.log(err)
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})