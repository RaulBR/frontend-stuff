// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/RestTest',
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to mongo db server');
        }
        console.log('Connected to mongo db server');
        const db = client.db('RestTest');
        db.collection('Todos').insertOne({
            test: 'test string',
            yes: true
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert');
            }
            console.log(JSON.stringify(result.ops, undefined, 2))
        });
        client.close();
    });