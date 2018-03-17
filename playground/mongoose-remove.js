const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5aacbedf65d7d9c5a6afd3b0'}).then((todo) => {
//   console.log();
// })

Todo.findByIdAndRemove('5aacbedf65d7d9c5a6afd3b0').then((todo) => {
  console.log(todo);
});