/* Création de express */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

// Erreurs de cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Appel de bodyparser
app.use(bodyParser.json())

// Récupération des messages
app.get('/messages', (req, res) => {
	const messages = ['My very', 'First', 'Message', 'Now', 'yes'];
	res.send(messages);
});

// Création d'un message
app.post('/messages', (req, res) => {
console.log(req.body);
res.json({});
//	const messages = ['My very', 'First', 'Message', 'Now', 'yes'];
//	res.send(messages);
});


app.listen(port, () => console.log('app running'));
