// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server');

db.collection('Todos').find({
  _id: new ObjectID('5a564e1e3141e313b45147b1')
}).toArray().then((docs) =>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
},(err) =>{
  console.log('Unable to find the document', err);
});


//db.close();
});
 
