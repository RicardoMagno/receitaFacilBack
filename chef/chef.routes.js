var express = require('express');
var router = express.Router();
let user = require('./user.controller')
let report = require('../recipe/recipe.controller')

/* GET chefs listing. */

//router.get('/:userId', user.getUser);
//router.post('/', user.createUser);
//router.post('/login', user.login);
//router.put('/:userId', user.updateUser);
//router.delete('/:userId', user.deleteUser);
//router.get('/:userId/reports', report.getReportsByUserId);

router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'ap0plication/json');
    res.send(JSON.stringify({ chefs: 1 }))
  });
router.get('/getComment', (req, res) => {
    res.send(JSON.stringify("all"));
});
router.get('/:id', (req, res) => {
    res.send(JSON.stringify({chef: 1}));
});
router.post('/create', function (req, res) {
    res.end(JSON.stringify(req.body, null, 2))
});
  
module.exports = router;
