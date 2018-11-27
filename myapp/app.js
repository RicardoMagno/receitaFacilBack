var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var cache = require('memory-cache');
var cors = require('cors');
var mongoose = require('mongoose');

const session = require('express-session')

var getSecret = require('./secrets');

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var indexRouter = require('./routes/index');
var userRouter = require('../user/user.routes');
var recipeRouter = require('../recipe/recipe.routes');
var commentRouter = require('../comment/comment.routes');
//var chef = require('./chef')
//var recipe = require('./recipe')
//app.use('/chef', chef)
//app.use('/recipe', recipe)

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});


//ROUTES
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/recipe', recipeRouter);
app.use('/comment', commentRouter);


app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();  // sem o next, a chamada para aqui
});

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