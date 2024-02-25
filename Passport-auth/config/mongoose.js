const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/passport_auth');

const db = mongoose.connection;

db.on('error',console.log.bind('error','This is an error to connect database'));

db.once('open',function(){
    console.log('success');
})

module.exports = db;