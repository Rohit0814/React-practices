const passport = require('passport');
const LOCALSTRATEGY = require('passport-local').Strategy;
const User = require('../models/userSchema');

// passport.use(new LOCALSTRATEGY({
//     usernameField:'email'
// }).then((email,password,done) => {
//     User.findOne({email:email}).then(user => {
//         if(!user || user.password){
//             console.log('Invalid User....');
//             return done(null, false);
//         }
//         return done(null,user);
//     }).catch(err => {
//         console.log('There is an error: ',err);
//         return res.redirect('back');
//     });
// }).catch(err =>{
//     console.log('There is an error: ',err);
//     return res.redirect('back');
// }));

passport.use(new LOCALSTRATEGY({
    usernameField: 'email'
}, (email, password, done) => {
    User.findOne({ email: email }).then(user => {
        if (!user || user.password !== password) {
            console.log('Invalid User....');
            return done(null, false);
        }
        return done(null, user);
    }).catch(err => {
        console.log('There is an error: ', err);
        return done(err);
    });
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.deserializeUser(function(id,done){
    User.findById(id).then(data => {
        return done(null,data);
    }).catch(err => {
        console.log('deserialisedUser error: ',err);
        return done(err);
    })
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/signup');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;