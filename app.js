var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// define routers that we want to use for various URLs
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// define the express app
var app = express();

// view engine setup, currently using Jade template engine (might not be used until we create HTML for the API)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware definitions, mostly helpful utilities
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware to serve static files that live in public/ from the root
app.use(express.static(path.join(__dirname, 'public')));

// define routers to use for expected URLs (see routes/)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
