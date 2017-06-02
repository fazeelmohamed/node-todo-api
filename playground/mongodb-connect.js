const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url , (err,db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server!');
    }
    console.log('Connected to mongoDB server!');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do 1',
    //     complete: true
    // },(err,result) => {
    //     if(err){
    //         return console.log("Unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

     db.collection('Users').insertOne({
        name: 'Fazeel',
        email: 'fazeel@gmail.com',
        password:'123abc',
        age:25
    },(err,result) => {
        if(err){
            return console.log("Unable to insert user",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});

