var express = require('express');
var router = express.Router();

/* GET chefs listing. */

router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'ap0plication/json');
  res.send(JSON.stringify({ chefs: 1 }))
});
router.get('/all', (req, res) => {
  res.send(JSON.stringify("all"));
});
router.get('/:id', (req, res) => {
  res.send(JSON.stringify({chef: 1}));
});
router.post('/create', function (req, res) {
  res.end(JSON.stringify(req.body, null, 2))
});
module.exports = router;
