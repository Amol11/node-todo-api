// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5e146dedcd9a24e2a7525b64')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Vijay'
    },{
        $set: {
            name: 'Ajay'
        },
        $inc: {
            age: 25
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    //db.close();
});