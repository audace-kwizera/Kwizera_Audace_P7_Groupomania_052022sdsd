var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
//importation des models
var models = require('../models');

//Routes
module.exports = {
	register: function(req, res) {

		var email = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var bio = req.body.bio;

		// Vérifier que les infos ont bien été renseignés
		if (email == null || username == null || password || null) {
			return res.status(400).json({ 'error': 'Veuillez remplir ce champs' })
		}

		// Vérifier si l'user n'existe pas dans la base de donnée
	},
	login: function(req, res) {

	}
}