'use strict';
module.exports = (app) => {
    const userController = require('./user/Controller');

    /**
     * Mapeamento das rotas
     */
    app.route('/user')
        .get(userController.listUser)
        .post(userController.createUser);

    app.route('/user/:idUser')
        .get(userController.getUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
};