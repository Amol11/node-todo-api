const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//removes all records
// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findOneAndRemove({}).then((todo) => {

});