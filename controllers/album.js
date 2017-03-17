//importeren van onze modul
const Album = require('../models/album');

// hier gaan we al beginnen met de app te gebruiken
const create = (req, res, next) => {

	/** Dit was een voorbeeld maar je kan dus om via een form bijvoorbeeld albums 
	toe te voegen moet het anders
	const album = new Album({
		title: 'AM',
		artist: 'Bruno Mars',
		imageUrl: 'http://www.brunomars.com//sites/g/files/g2000006216/f/201611/BrunoMars_Site_NewSite_Assets_FBOG.jpg'
	});
	**/ 

	const Album = new Album();

	Album.save((err, result) => {
		if (err) {
			res.status(500);
			return res.send(err);
		}
		res.json(result);
	});

}

//zoek functie
const list = (req, res, next) => {
	Album.find().exec((err, results) => {
		if (err){
			return res.status(500).send(err);
		}

		return res.json(results);
	});
}

module.exports = {
	//we exporteren een object naar buiten
	create: create,
	list: list
}
