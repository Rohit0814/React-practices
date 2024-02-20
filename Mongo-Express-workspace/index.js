const express = require('express');
const path = require('path');

const app = express();
const port=8000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('Assets'));
app.use(express.urlencoded());


app.get('/',function(req,res){
    return res.send('<h1>Hello Mongo</h1>');
})

app.listen(port,function(err){
    if(err){
        console.log('there is an error........ ',err);
        return;
    }

    console.log('the serever run on port: ',port);
})