var express = require('express');
var router = express.Router();
let user = require('./user.controller')
let recipe = require('../recipe/recipe.controller')

router.get('/:userId', user.getUser);
router.post('/', user.createUser);
router.post('/login', user.login);
router.put('/:userId', user.updateUser);
router.delete('/:userId', user.deleteUser);
//router.get('/:userId/recipes', recipe.getRecipeByUserId);

module.exports = router;
