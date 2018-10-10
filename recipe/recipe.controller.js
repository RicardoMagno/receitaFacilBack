const Recipe = require('./recipe.model')
const Comment = require('../comment/comment.model')

exports.createRecipe = function (req, res, next) {
    let body = req.body;
    const newRecipe = new Recipe(body);
    newRecipe.save((err, recipe) => {
      if (err)
        next(err);
      res.status(201).json(recipe);
    });
};
exports.getRecipe = function (req, res, next) {
    let body = req.body;
    let params = req.params;

    Recipe.findById(params.recipeId, (err, recipe) => {
        if (err)
            next(err);
        res.status(200).json(recipe);
    });
};
exports.updateRecipe = function (req, res, next) {
    let body = req.body;
    let params = req.params;
    Recipe.findByIdAndUpdate(params.recipeId, body, {new: false}, (err, recipe) => {
        if (err)
            next(err);
        res.status(200).json(recipe);
    });
};
exports.deleteRecipe = function(req, res, next) {
    let params = req.params;
    Comment.deleteMany({reportId: report.id}, (err, comment) => {
        if(err)
            next(err);
        });
        Recipe.findByIdAndDelete(params.recipeId, (err, recipe) => {
        if (err)
            next(err);
        res.status(200).json({message: "recipe deleted."});
    });
};