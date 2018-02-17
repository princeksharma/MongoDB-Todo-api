var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  var todo = new Todo({
    text: req.body.text
  });

todo.save().then((doc) => {
  res.send(doc);
}, (e) =>{
  res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) =>{
    res.send({todos});
  }, (e) =>{
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
//
//
//
// beforeEach((done) =>{
//   Todo.remove({}).then(() => done());
// });
//
// describe('POST /todos', () =>{
//    it('should create a new todo',(done) =>{
//      var text = 'Test todo text';
//
//       require(app)
//        .post('/todos')
//        .send({text})
//        .expect(200)
//        .expect((res) => {
//         expect(res.body.text).toBe(text);
//       })
//       .end((err,res) => {
//         if (err) {
//           return done(err);
//         }
//
//         Todo.find().then((todos) =>{
//           expect(todos.length).toBe(1);
//           expect(todos[0].text).toBe(text);
//           done();
//         }).catch((e) =>done(e));
//       });
//    });
// });
