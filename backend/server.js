/* Création de express */
const express = require('express');
const app = express();
 // import des chemins
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser');
/* Import de Api Router */
var apiRouter = require('./apiRouter').router;
const port = process.env.PORT;

app.use(express.json());


// Erreurs de cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

server.use('/', apiRouter);


	var messages = ['La vie', 'Est', 'Très', 'Belle', 'yes'];


// Récupération des messages
app.get('/messages', (req, res) => {
	res.send(messages);
});

// Création d'un message
app.post('/messages', (req, res) => {
	let msg = req.body
	console.log(msg);
	// Ajouter le message
	messages.push(msg.message)
	res.json(msg);
	console.log(messages)
});


app.listen(port, () => console.log('app running'));
