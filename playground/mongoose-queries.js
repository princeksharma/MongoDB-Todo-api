const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a6cd229e467fc1b0c14b170';
//
// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);;
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// }  );
//
// Todo.findById(id).then((todo) =>{
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('5a6cd229e467fc1b0c14b170').then((user) =>{
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) =>{
  console.log(e);
});
