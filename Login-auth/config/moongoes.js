const moongoes = require('mongoose');
moongoes.connect('mongodb://localhost:27017/auth_user');
const db= moongoes.connection;

db.on('error',console.error.bind(console,'error'));

db.once('open',function(){
    console.log('success');
});