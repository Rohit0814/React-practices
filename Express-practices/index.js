const express = require('express');
const port = 8000;
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('Assets'));
app.use(express.urlencoded());

const data=[];


app.get('/register',function(req,res){
    let temp_data=[{
        id:"",
        email:"",
        name:"",
        password:"",
        gen:"",
        address:"",
        language: "",
        course: "",
    }];

    return res.render('register',{
        title:'register',
        temp_data:temp_data,
        form_name:'Registration',
        btn_name:'Register'
    });
});

app.get('/update',function(req,res){
    let temp_id= req.query.id;
    let temp_data=[{
        id:"",
        email:"",
        name:"",
        password:"",
        gen:"",
        address:"",
        language: "",
        course: "",
    }];
    htmlFor(let i of data){
        if(i.id==temp_id){
            temp_data=[{
                id:i.id,
                email:i.email,
                name:i.name,
                password:i.password,
                gen:i.gen,
                address:i.address,
                language: i.language,
                course: i.course,
            }];
        }
    }
    return res.render('register',{
        title:'register',
        temp_data:temp_data,
        form_name:'Updation',
        btn_name:'Update',
    });
});

app.post('/update',function(req,res){
    let temp_id = req.query.id;
    let index = data.findIndex(x=>x.id==temp_id);
    let temp_data = {
        id:temp_id,
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        gen:req.body.gen,
        address:req.body.address,
        language: req.body.lgn,
        course: req.body.course,
    }
    data.splice(index,1,temp_data);
    return res.redirect('/');
})

app.get('/',function(req,res){
    return res.render('home',{
        title:'Home',
        register_data:data,
        data_index:data.length
    })
})

app.get('/delete',function(req,res){
    let temp_id= req.query.id;
    let index = data.findIndex(x=>x.id==temp_id);
    data.splice(index,1);
    return res.render('/');
})




app.post('/create-user',function(req,res){

    data.push({
        id:data.length+1,
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        gen:req.body.gen,
        address:req.body.address,
        language: req.body.lgn,
        course: req.body.course,
    });
    

    return res.redirect('/');
});


app.listen(port,function(err){
    if(err){
        console.log('There is an error ', err);
        return;
    }
    console.log('server is up and running on port: ',port);
})