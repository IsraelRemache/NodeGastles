//npm shit toevoegen.
const express = require("express");
const chalk = require("chalk");
//config importeren met een path maar je moet de .js van achter er niet opschrijven maar het mag.
const config = require('./config/config');
/** 
//port geconfigureerd voor hard coding
const config = {
	port:3000
};
// we kunnen dit beter wel in een aparte config file steken
**/
//We gaan mongoose ook gebruiken dus we moeten dit toevoegen.
const mongoose = require('mongoose');

//we gaan de album router requiren.
const albumRouter = require('./routes/album');

//we gaan hier connectie maken met een database die we in config declareren.
mongoose.connect(config.database);

//Hier creëeren we een App genaamd
const App = express();


// de functie die we hebben geexport in routes voegen we hier in toe.
albumRouter(App);

// Hier waren we een klein test App.get maken
// req = request, res = respons, next = opent volgende functie
App.get('/', (req, res, next) => {
	res.send('Hello World!');
});


// hier kiezen we voor een port waarin we willen werken
App.listen(config.port, () => {
	//ES6 syntax word gebruikt dus LETOP met haakjes! het is niet " of ' maar ` Das knop links van ENTER met Pond Teken
	console.log(`Example app listening on port ${config.port}!`);
});


