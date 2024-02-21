const mongooes = require('mongoose');
mongooes.connect('mongodb://localhost:27017/ExpressServer');

const db = mongooes.connection;
db.on('error',console.error.bind(console,'error'));
db.once('open',function(){
    console.log('Successfully connected.....');
});