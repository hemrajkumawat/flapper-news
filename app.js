var mongoose = require('mongoose');
console.log("starting the app");
require('./models/Posts');
require('./models/Comments');
mongoose.connect('mongodb://localhost/news');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("working till routes");

app.use('/', routes);
console.log("error till routes");
app.use('/users', users);

console.log("error after routes");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
console.log("error handlers started");
console.log(app.get('env'));
// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
console.log("error handlers WORKING");

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
console.log("not working");
var requestify = require('requestify');

requestify.post('http://localhost:3000/posts', {
    title: 'test',
    link: 'http://test.com'
})
.then(function(response) {
    // Get the response body (JSON parsed or jQuery object for XMLs)
    response.getBody();
});
module.exports = app;