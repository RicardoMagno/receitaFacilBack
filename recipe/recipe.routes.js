var express = require('express');
var router = express.Router();
var recipe = require('./recipe.controller');
var comment = require('../comment/comment.controller')

router.get('/:recipeId', recipe.getRecipe);
router.post('/', recipe.createRecipe);
router.put('/:recipeId', recipe.updateRecipe);
router.delete('/:recipeId', recipe.deleteRecipe);
//router.get('/:recipeId/comment', comment.getCommentByRecipeId);

module.exports = router;