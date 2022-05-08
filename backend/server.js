/* Création de express */
const express = require('express');
const app = express();
const port = 3000;

// Récupération des messages
app.get('/messages', (req, res) => {
	const messages = ['My very', 'First', 'Message'];
	res.send(messages);
});


app.listen(port, () => console.log('app running'));
