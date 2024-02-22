const express = require('express');
const path = require('path');
var cookies = require("cookie-parser");
const port = 8000;

const app = express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));
app.use(cookies());
app.use('/',require('./routes'));
const db=require('./config/moongoes');


app.listen(port,function(err){
    if(err){
        console.log('There is an error: ',err);
        return
    }
    console.log('Server is up and running on port: ',port);
})