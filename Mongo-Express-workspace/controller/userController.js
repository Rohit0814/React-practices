const User = require('../model/schema')

module.exports.userView=(req,res)=>{
    return res.render('user');
} 

module.exports.dataSave=(req,res)=>{
    User.create({
        name:req.body.name,
        email:req.body.email,
        course:req.body.course
    }).then(newUser=>{
        console.log(newUser);
        return res.render('user');
    }).catch(err=>{
        console.log(err);
        return;
    });
}

module.exports.loadData=(req,res)=>{
    User.find({}).then(users => {
        console.log(users);
        return res.render('display',{
            user:users
        });
    }).catch(err=>{
        console.log('error.... ',err);
        return;
    })
    
}
