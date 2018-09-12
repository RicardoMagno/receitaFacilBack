'use strict';
module.exports = (app) => {
    const userController = require('./userController');

    /**
     * Mapeamento das rotas
     */
    app.route('/user')
        .get(userCtrl.listUser)
        .post(userCtrl.createUser);

    app.route('/user/:idUser')
        .get(userCtrl.getUser)
        .put(userCtrl.updateUser)
        .delete(userCtrl.deleteUser);
};