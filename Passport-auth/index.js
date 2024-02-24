const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const db = require('./config/mongoose');

app.use('/',require('./routes'))

app.listen(port, function(err) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  console.log('Server is running and Up: ', port);
});
