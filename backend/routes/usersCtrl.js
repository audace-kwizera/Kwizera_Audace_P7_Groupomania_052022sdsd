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

		// Vérifier si l'user n'existe pas dans la base de données
		models.User.findOne({
			attributes: ['email'],
			where: { email: email }
		})
		.then(function(userFound) {
			if(!userFound) {
          bcrypt.hash(req.body.password, 10, function(err, bcryptedPassword) {
            var newUser = models.User.create({
              email: email,
              username: username,
              password: bcryptedPassword,
              bio: bio,
              isAdmin: 0
            })
            //Si ok création de l'user
            .then(function(newUser) {
              return res.status(201).json({
                'userId': newUser.id
              })
            })
            // Sinon affichage erreur
            .catch(function(err) {
              return res.status(500).json({ 'error': `Oups une erreur s'est produite, veuillez réessayer` })
            })
          })
			} else {
				//Si pseudo existe Affichage erreur
				return res.status(409).json({ 'error': 'Oups ce pseudo existe déjà' })
			}
		})
		.catch(function(err) {
			// Si erreur inconnu
			return res.status(500).json({ 'error': 'Oups on arrive pas à vérifier si le pseudo est déjà pris.<br />Veuillez réessayer' })
		});

	},
	login: function(req, res) {

	}
}