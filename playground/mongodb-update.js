// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a647fa780d9b4e83f8633eb')
// },{
//   $set:{
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a5650c3d054451c4012d98c')
},{
  $set:{
    name:'Prince'
  },
  $inc:{
    age: 1
  }
},{
  returnOriginal: false
}).then((result) =>{
  console.log(result);
});


//db.close();
});
