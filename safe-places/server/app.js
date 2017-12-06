var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const mongoose     = require('mongoose');
var auth = require('./routes/auth');

const apiFor = require('./routes/api');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const passport     = require('passport');

mongoose.connect('mongodb://localhost/safe-places');

var index = require('./routes/index');

var cors = require('cors');

var app = express();

app.use(cors());

app.use(session({
  secret: "forum-app",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport/index');

// configure(passport);

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', auth);
app.use('/api/places', apiFor(require('./models/Place')));
app.use('/api/review', apiFor(require('./models/Review')));
app.use('/api/user', apiFor(require('./models/User')));
app.use('/api/favourite', apiFor(require('./models/Favourite')));
// app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
