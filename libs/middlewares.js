const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const path = require('path');

module.exports = app => {
  app.set('port', process.env.NODE_ENV || 3000);
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(expressValidator());
  app.use(expressSession({
    secret: 'appbsied',
    resave: false,
    saveUninitialized: false
  }));
}
