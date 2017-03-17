const express = require('express');
const albums = require('../controllers/album');

//we maken een functie en we sturen die naar buiten
module.exports = function getRouter(app){
	const router = new express.Router();

	// hier is '/' wel verwarrend
	router.route('/')
		  .get(albums.list)
		  .post(albums.create);

	// We vertellen aan de applicatie dat we die router object willen gebruiken
	app.use('/albums', router);

};
