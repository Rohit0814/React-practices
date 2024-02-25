const User = require('../models/userSchema');
const localAuth = require('../config/passport-local-auth');
const passport = require('../config/passport-local-auth');

module.exports.home = (req,res) =>{
    return res.render('home');
}

module.exports.sign_up=(req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/dashboard');
    }
    return res.render('registration');
}

module.exports.log_in = (req,res) => {
    if(req.isAuthenticated()){
        return res.redirect('/users/dashboard');
    }
    return res.render('login');
}

module.exports.data_save = (req,res) =>{
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email}).then(user => {
        if(!user){
            User.create({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                address:req.body.address
            }).then(data => {
                // console.log('data save: ', data);
                return res.redirect('/users/login');
            }).catch(err => {
                console.log('There is an error: ',err);
                return redirect('back');
            })
        }
        else{
            console.log('user Already Exits......');
            return res.redirect('back');
        }
    }).catch(err => {
        console.log('There is an error outside: ',err);
        return res.redirect('back');
    })
    // return res.render('login');
}

module.exports.dashboard = (req,res) => {
    if(req.isAuthenticated()){
        return res.render('dashboard');
    }
    return res.redirect('/');
}

module.exports.create_session = (req,res) =>{
    return res.redirect('/users/dashboard');
}