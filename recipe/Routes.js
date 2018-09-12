'use strict';
module.exports = (app) => {
    const recipeController = require('./recipe/Controller');

    /**
     * Mapeamento das rotas das receitas
     */
    app.route('/recipe')
        .get(recipeController.listRecipe)
        .post(recipeController.createRecipe);

    app.route('/recipe/:idRecipe')
        .get(recipeController.getRecipe)
        .put(recipeController.updateRecipe)
        .delete(recipeController.deleteRecipe);
};