const db=require('../config/moongoes');
const User=require('../model/authUserSchema')

module.exports.home = (req,res)=> {
    return res.render('home');
}

module.exports.sign_up=(req,res)=>{
    return res.render('registration');
}

module.exports.log_in=(req,res) =>{
    return res.render('login');
}

module.exports.save_user = (req,res) =>{
    if (req.body.password === req.body.confirm_password) {
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                // Use User model to create a new user
                User.create({
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    address: req.body.address
                }).then(userData => {
                    return res.redirect('/users/login');
                }).catch(err => {
                    console.log('Error in creating user:', err);
                    return res.status(500).send('Internal Server Error');
                });
            } else {
                // User with the given email already exists
                return res.status(400).send('User with this email already exists');
            }
        }).catch(err => {
            console.log('Error in finding user:', err);
            return res.status(500).send('Internal Server Error');
        });
    } else {
        // Passwords do not match
        return res.status(400).send('Passwords do not match');
    }
}


module.exports.auth_user =(req,res) => {
    return res.render('dashboard');
}