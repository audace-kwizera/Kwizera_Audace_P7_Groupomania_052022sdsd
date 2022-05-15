/* Import de express */
const express = require('express');
/* Import des controllers  */
var UsersCtrl = require('./routes/usersCtrl');

//Router
exports.router = (function() {
	var apiRouter = express.Router();

	// Routes Utilisateurs
	apiRouter.route('/users/register/').post(usersCtrl.register);
	apiRouter.route('/users/login/').post(usersCtrl.login);

	return apiRouter;
})();
