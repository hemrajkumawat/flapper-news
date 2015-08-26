<<<<<<< HEAD
=======
var mongoose = require('mongoose');
console.log("starting the app");
require('./models/Posts');
require('./models/Comments');
mongoose.connect('mongodb://localhost/news');

>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
//MongoDB connecting and modeling:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news2');

//passport library import
var passport = require('passport');
app.use(passport.initialize());

//tables import of the project
require('./models/Posts');
require('./models/Comments');
require('./models/Users');
require('./config/passport');

var routes = require('./routes/index');
var app = express();

app.set('port', process.env.PORT || 3000);
=======
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
<<<<<<< HEAD
//app.use(favicon(__dirname + '/public/favicon.ico'));

=======
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public_html')));

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
=======
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
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
<<<<<<< HEAD
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-c to terminate');
});
module.exports = app;
=======
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
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
