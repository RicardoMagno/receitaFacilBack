var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Receita Facil' });
});

//app.get('/', function(req, res, next) {
  //   res.send('index2');
  // });
  
module.exports = router;
