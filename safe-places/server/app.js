require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const places = require('./routes/places');
const placeController = require('./controllers/placeController');


const mongoose = require('mongoose');

const auth = require('./routes/auth');
const session = require('express-session');
const passport = require('passport');

const apiFor = require('./routes/api');

const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
var app = express();


mongoose.connect(process.env.DBURL).then(() => {
  console.log(`Connected to DB: ${process.env.DBURL}`);
}).catch(err => console.log(err));

var whitelist = [
  'http://localhost:4200',
];



var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

var index = require('./routes/index');




// --------------------------ESTO NO DEBERIA ESTAR AQUI----------------------
// ----------MONGOSTORE O COOKIE O LOS DOS????------------------------
app.use(session({
  secret: "killhomophobia",
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

require('./passport')(app);

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
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', index);
app.use('/auth', auth);
app.use('/api/places', places);
// app.use('/api/places', apiFor(require('./models/Place')));
app.use('/api/review', apiFor(require('./models/Review')));
app.use('/api/user', apiFor(require('./models/User')));
app.use('/api/favourite', apiFor(require('./models/Favourite')));

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
