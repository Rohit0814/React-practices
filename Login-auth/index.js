const express = require('express');
const { register } = require('module');
const port = 8000;
const path=require('path');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'))

app.get('/',function(req,res){
    return res.render('registration');
});


app.listen(port,function(err){
    if(err){
        console.log('This is an error.... ',err);
        return;
    }
    console.log('This work perfectly on port: ',port);
})