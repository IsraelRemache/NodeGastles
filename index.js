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

//Hier creëeren we een App genaamd
const App = new express();


// req = request, res = respons
App.get('/', (req, res) => {
	res.send('Hello World!');
});

// hier kiezen we voor een port waarin we willen werken
App.listen(config.port, () => {
	//ES6 syntax word gebruikt dus LETOP met haakjes! het is niet " of ' maar ` Das knop links van ENTER met Pond Teken
	console.log(`Example app listening on port ${config.port}!`);
});


