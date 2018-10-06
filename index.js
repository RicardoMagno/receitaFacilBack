var express  = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var app = express();
var path = require('path');
//const router = require('express').Router();
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
//var swagger = require('swagger-express');
 
//router.use('/', swaggerUi.serve);
//router.get('/', swaggerUi.setup(swaggerDocument));
var indexRouter = require('./myapp/routes/index');
var chefRouter = require('../myapp/chef/chef.routes');
var recipeRouter = require('../myapp/recipe/recipe.routes');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.send('index');
});

//ROUTES
app.use('/', indexRouter);
app.use('/chef', chefRouter);
app.use('/recipe', recipeRouter);

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
   next();
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
