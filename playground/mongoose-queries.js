const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5e15c9a0ec6d771c0a6ab5fa';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return Console.length('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5e15cf610ce1a7641f492b4e';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

