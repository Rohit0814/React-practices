const express = require('express');
const port = 8000;
const path = require('path');
const cookies = require('cookie-parser');

const app = express();
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const db = require('./config/mongoose');
// const cookieParser = require('cookie-parser');

const passport = require('./config/passport-local-auth'); 
const MongoStore = require('connect-mongo');

app.use(session({
  name:'testing',
  secret : 'logindash',
  saveUninitialized : false,
  resave : false,
  cookie : {
    maxAge : (1000*60*100)
  },
  store: MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/passport_auth',
    autoRemove:'disabled'
  },function(err){
    console.log('working....');
  })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port, function(err) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  console.log('Server is running and Up: ', port);
});
